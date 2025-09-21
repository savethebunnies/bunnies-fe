import ContentCenter from "@/components/ui/containers";

export default function Home() {
  // useEffect(() => {
  //   async function getPost() {
  //     try {
  //       const res = await fetch("api/rabbits/1", {
  //         method: "GET",
  //       });

  //       if (!res.ok) {
  //         throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
  //       }

  //       const data = await res.json();
  //       console.log("서버 응답:", data);
  //     } catch (error) {
  //       console.error("데이터 전송 중 오류 발생:", error);
  //     }
  //   }
  //   getPost();
  // }, []);
  return (
    <ContentCenter>
      <div className="bg-[url('/rabbit_01.png')] w-25 h-25 bg-contain"></div>
      <p className="">준비중입니다! 곧 만나요!</p>
    </ContentCenter>
  );
}
