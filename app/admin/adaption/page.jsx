import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/containers";
import { Input, FileInput } from "@/components/ui/input";
import GenderOptions from "../(components)/gender-options";
import TextArea from "@/components/ui/textarea";
import Select from "@/components/ui/select";

export default function Page() {
  //   const submit = (formData) => {};
  async function createPost(formData) {
    "use server";

    const newFormData = new FormData();

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("$ACTION_ID_")) {
        continue;
      }

      const newKey = `RABBIT_${key.toUpperCase()}`;
      newFormData.append(newKey, value);
    }
    console.log(newFormData, "newformData");
    try {
      const res = await fetch("http://3.39.22.34:3000/api/add-rabbit", {
        method: "POST",
        body: newFormData,
      });

      if (!res.ok) {
        throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
      }

      const data = await res.json();
      console.log("서버 응답:", data);
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  }
  //revalidatePath("/adaption") adaption 페이지의 모든 요청 서버에서 데이터 새로고침
  return (
    <SectionContainer title="입양 공고 등록" id="adaption" className="bg-white">
      <form action={createPost}>
        <div className="grid gap-4">
          {/* <Input label="상태" id="condition" placeholder="상태" /> */}
          <Select
            label="상태"
            name="condition"
            options={["입양 공고", "임보 중", "입양 완료"]}
          />
          <Input label="이름" id="nm" placeholder="이름을 입력해주세요" />
          <GenderOptions />
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
            id="rescue_location"
            placeholder="구조 장소를 입력해주세요"
            helperText="시 / 구 / 동"
          />
          <TextArea
            label="기타"
            name="desc"
            placeholder="기타 정보를 입력해주세요"
            rows="4"
          />
          <FileInput
            label="이미지"
            id="image"
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
