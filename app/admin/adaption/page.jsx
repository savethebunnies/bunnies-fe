import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/containers";
import { Input, FileInput } from "@/components/ui/input";

export default async function Page() {
  //   const submit = (formData) => {};
  return (
    <SectionContainer title="입양 공고 등록" id="adaption" className="bg-white">
      {/* <form action={submit}> */}
      <Input label="이름" id="name" placeholder="이름을 입력해주세요" />
      <Input
        label="몸무게"
        type="number"
        id="weight"
        placeholder="예시) 1.5"
        unit="kg"
      />
      <Input
        label="구조 장소"
        id="place"
        placeholder="구조 장소를 입력해주세요"
        helperText="시 / 구 / 동"
      />
      <FileInput
        label="이미지"
        id="image"
        placeholder="이미지를 등록해주세요"
        helperText="첫 번째로 업로드한 이미지가 대표 이미지로 설정됩니다."
      />

      {/* </form> */}
      <Button>공고 등록하기</Button>
    </SectionContainer>
  );
}
