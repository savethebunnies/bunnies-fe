"use client";

import { useEffect, useRef, useState } from "react";
import Field from "./field";

//기본 인풋
export function Input({ label, type = "text", helperText, unit, ...props }) {
  return (
    <Field label={label} helperText={helperText}>
      <input
        type={type}
        id={props.id}
        name={props.id}
        className="border-b h-12 bg-gray-100 px-4"
        {...props}
      />
      {unit && (
        <span className="absolute right-3 top-1/2 inline-block">{unit}</span>
      )}
    </Field>
  );
}

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
  const hasSelectedImages = selectedFiles.length > 0;
  const openFilePicker = () => fileRef.current?.click();
  const handleFileFocus = (e) => {
    openFilePicker();
    e.target.blur();
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    if (newFiles.length === 0) return;
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
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
      <div className="flex gap-1">
        {selectedFiles.map((file, index) => {
          return (
            <div className="relative" key={index}>
              <img
                src={getPreviewUrl(file)}
                alt="미리보기"
                className="w-15 aspect-square object-cover bg-gray-100"
              />
              <button
                type="button"
                className="absolute top-0 right-0"
                onClick={() => deleteImage(index)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
