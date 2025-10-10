"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "./input";

const MAX_FILES = 10;

//파일 인풋
export default function FileInput({
  label,
  type = "file",
  helperText,
  unit,
  ...props
}) {
  const fileRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const remaining = MAX_FILES - selectedFiles.length;
  const hasSelectedImages = selectedFiles.length > 0;
  const [s3Urls, setS3Urls] = useState([]);

  //   useEffect(() => {
  //     if (fileRef.current) {
  //       const dataTransfer = new DataTransfer();
  //       selectedFiles.forEach((file) => dataTransfer.items.add(file));
  //       fileRef.current.files = dataTransfer.files;
  //     }
  //   }, [selectedFiles]);

  const uploadFileToS3 = async (file) => {
    let fileName = encodeURIComponent(file.name);
    let fileType = encodeURIComponent(file.type);

    // 서버에 Presigned URL 요청
    const presignResponse = await fetch(
      `/api/image?file=${fileName}&type=${fileType}`,
      {
        method: "POST",
      }
    );
    if (!presignResponse.ok) {
      throw new Error("Presigned URL 요청 실패");
    }
    const { url, fields } = await presignResponse.json();

    // S3에 파일 직접 업로드
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("file", file);

    const s3UploadResponse = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!s3UploadResponse.ok) {
      const errorText = await s3UploadResponse.text();
      console.error("S3 업로드 실패 응답:", errorText);
      throw new Error("S3 업로드 실패");
    }

    const finalUrl = `${url}/${fields.key}`;
    return finalUrl;
  };

  //파일 선택 오픈
  const openFilePicker = () => {
    if (remaining <= 0) {
      return alert(`최대 ${MAX_FILES}장까지만 업로드할 수 있어요.`);
    }
    fileRef.current?.click();
  };

  const handleFileFocus = (e) => {
    openFilePicker();
    e.target.blur();
  };

  //파일 선택
  const handleFileChange = async (e) => {
    const picked = Array.from(e.target.files);
    if (picked.length === 0) return;
    const remaining = MAX_FILES - selectedFiles.length;
    //10장 이상 선택 시
    if (picked.length > remaining) {
      e.currentTarget.value = "";
      alert(`최대 ${MAX_FILES}장까지만 업로드할 수 있어요.`);
      return;
    }

    setSelectedFiles((prev) => [...prev, ...picked]);

    try {
      const uploadPromises = picked.map((file) => uploadFileToS3(file));
      const newS3Urls = await Promise.all(uploadPromises);

      // 최종 DB에 저장될 URL 목록
      setS3Urls((prevUrls) => [...prevUrls, ...newS3Urls]);
    } catch (error) {
      console.error("파일 업로드 중 오류 발생:", error);
      alert("파일 업로드에 실패했습니다. 다시 시도해 주세요.");
      // 실패한 파일은 UI에서도 제거하는 로직 추가 필요
    }
  };

  //이미지 삭제
  const deleteImage = (indexToDelete) => {
    setS3Urls((prev) => prev.filter((_, i) => i !== indexToDelete));
    setSelectedFiles((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  //s3 저장된 url 반환
  const getPreviewUrl = (index) => {
    return s3Urls[index];
  };

  return (
    <>
      <Input
        label={label}
        readOnly
        placeholder={
          hasSelectedImages
            ? `총 ${selectedFiles.length}개 이미지 선택됨`
            : props.placeholder
        }
        onFocus={handleFileFocus}
        helperText={helperText}
        aria-controls={props.id}
      />
      <input
        ref={fileRef}
        type={type}
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        {...props}
      />
      <input
        type="hidden"
        id={props.id}
        name={props.id}
        value={JSON.stringify(s3Urls)}
      />
      <div className="overflow-x-auto mb-12">
        <div className="grid grid-flow-col gap-3 auto-cols-[calc((100%_-_2.25rem)/4)] sm:auto-cols-[calc((100%_-_3.75rem)/6)]">
          {selectedFiles.map((_, index) => {
            return (
              <div className="relative" key={index}>
                <img
                  src={getPreviewUrl(index)}
                  alt="미리보기"
                  className="aspect-square object-cover rounded bg-gray-100"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0"
                  onClick={() => deleteImage(index)}
                >
                  <img
                    className="w-7 h-7 "
                    src="/delete-img.png"
                    alt="이미지 삭제"
                    aria-hidden="true"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
