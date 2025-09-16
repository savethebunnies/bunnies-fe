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
    <div className="h-[calc(100vh-var(--nav-height))] relative">
      <div className="flex flex-col items-center justify-center text-center absolute top-1/3 w-full">
        <div className="bg-[url('/rabbit_01.png')] w-25 h-25 bg-contain"></div>
        <p className="">준비중입니다! 곧 만나요!</p>
      </div>
    </div>
  );
}
