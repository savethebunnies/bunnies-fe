export default function Home() {
  async function createPost(formData: any) {
    "use server";

    const newFormData = new FormData();

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("$ACTION_ID_")) {
        continue;
      }

      const newKey = `RABBIT_${key.toUpperCase()}`;
      newFormData.append(newKey, value);
    }

    try {
      const res = await fetch("http://3.39.22.34:3000/api/add-rabbit", {
        method: "POST",
        body: newFormData,
      });

      // 서버 응답을 확인합니다.
      if (!res.ok) {
        throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
      }

      const data = await res.json();
      console.log("서버 응답:", data);
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
    }
  }

  return (
    <div className="w-full">
      <form action={createPost}>
        <input type="text" name="nm" />
        <input type="text" name="gender" />
        <input type="number" name="weight" />
        <input type="text" name="character" />
        <input type="text" name="condition" />
        <input type="text" name="rescue_location" />
        <input type="text" name="desc" />
        <input type="file" name="image" />
        <button>전송</button>
      </form>
    </div>
  );
}
