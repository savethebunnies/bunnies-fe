"use client";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/containers";
import { Input } from "@/components/ui/input";
import GenderOptions from "../_components/gender-options";
import TextArea from "@/components/ui/textarea";
import Select from "@/components/ui/select";
// import { postRabbit } from "@/libs/api/post";
import { useState } from "react";
import { toast } from "react-toastify";
import NeuteredOptions from "../_components/neutered-options";
import Calender from "@/components/ui/calendar";
import FileInput from "@/components/ui/file-input";

export default function Page() {
  const [formKey, setFormKey] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = async (formData) => {
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`/api/rabbits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
      }
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
    setFormKey((prevKey) => prevKey + 1);
    setSelectedDate(null);
    toast.success("토끼 정보가 성공적으로 등록되었습니다!");
  };

  return (
    <SectionContainer title="입양 공고 등록" id="adaption" className="bg-white">
      <form key={formKey} action={handleSubmit}>
        <div className="grid gap-4">
          <Select
            label="상태"
            name="condition"
            options={["입양 공고", "임보 중", "입양 완료"]}
          />
          <Input label="이름" id="name" placeholder="이름을 입력해주세요" />
          <Input
            label="나이"
            id="age"
            placeholder="예) 2살 추정, 생후 3개월, 나이 모름 등"
          />
          <GenderOptions />
          <NeuteredOptions />
          <Input
            label="몸무게"
            type="number"
            step="0.1"
            id="weight"
            placeholder="예시) 1.5"
            unit="kg"
          />
          <TextArea
            label="특징"
            name="character"
            placeholder="특징을 입력해주세요"
            required={true}
            rows="4"
          />
          <Input
            label="구조 장소"
            id="location"
            placeholder="구조 장소를 입력해주세요"
            helperText="시 / 구 / 동"
          />
          <Calender
            label="구조 날짜"
            name="date"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <TextArea
            label="기타"
            name="ect"
            placeholder="기타 정보를 입력해주세요"
            rows="4"
          />
          <FileInput
            label="이미지"
            id="images"
            multiple
            placeholder="이미지를 등록해주세요"
            helperText="첫 번째로 업로드한 이미지가 대표 이미지로 설정됩니다."
          />
        </div>
        <Button>공고 등록하기</Button>
      </form>
    </SectionContainer>
  );
}
