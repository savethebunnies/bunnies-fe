import { ContentCenter } from "@/components/ui/containers";

export default async function Home() {
  return (
    <ContentCenter>
      <div className="bg-[url('/rabbit_01.png')] w-25 h-25 bg-contain"></div>
      <p className="">준비중입니다! 곧 만나요!</p>
    </ContentCenter>
  );
}
