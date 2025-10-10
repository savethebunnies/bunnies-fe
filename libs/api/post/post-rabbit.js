export async function postRabbit(formData) {
  try {
    const res = await fetch(`api/rabbits`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`HTTP 에러! 상태 코드: ${res.status}`);
    }
  } catch (error) {
    console.error("데이터 전송 중 오류 발생:", error);
  }
}
