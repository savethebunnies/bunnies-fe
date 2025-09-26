"use client";

import { useRef, useState } from "react";
import Field from "./field";

//기본 인풋
export function Input({ label, type = "text", helperText, unit, ...props }) {
  return (
    <Field label={label} helperText={helperText}>
      <input
        type={type}
        id={props.id}
        name={props.id}
        required={true}
        className="border border-[var(--gray-50)] rounded h-12  px-4"
        {...props}
      />
      {unit && (
        <span className="absolute right-4 top-1/2 inline-block">{unit}</span>
      )}
    </Field>
  );
}

const MAX_FILES = 10;
//파일 인풋
export function FileInput({
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

  const handleFileChange = (e) => {
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
  };

  //이미지 삭제
  const deleteImage = (indexToDelete) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToDelete)
    );
  };
  const getPreviewUrl = (file) => {
    return URL.createObjectURL(file);
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
        id={props.id}
        name={props.id}
        type={type}
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        {...props}
      />
      <div className="overflow-x-auto min-h-18 mb-12">
        <div className="grid grid-flow-col gap-3 auto-cols-[calc((100%_-_2.25rem)/4)] sm:auto-cols-[calc((100%_-_3.75rem)/6)]">
          {selectedFiles.map((file, index) => {
            return (
              <div className="relative" key={index}>
                <img
                  src={getPreviewUrl(file)}
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
