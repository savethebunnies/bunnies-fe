import { ContentCenter } from "@/components/ui/containers";
import { authOptions } from "@/libs/utils/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);
  return (
    <ContentCenter>
      <div className="bg-[url('/rabbit_01.png')] w-25 h-25 bg-contain"></div>
      <p className="">준비중입니다! 곧 만나요!</p>
    </ContentCenter>
  );
}
