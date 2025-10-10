export async function postRabbit(data) {
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
}
