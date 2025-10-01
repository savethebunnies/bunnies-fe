// utils/dateUtils.js

import { format } from "date-fns";
import { ko } from "date-fns/locale"; // 한국어 로케일 임포트

/**
 * 날짜 문자열을 받아 지정된 형식으로 변환하는 함수
 * @param {string | Date} dateInput - 변환할 날짜 문자열 또는 Date 객체 (예: "Wed Oct 01 2025...")
 * @param {string} formatStr - 출력 형식 (예: 'yyyy-MM-dd', 'yyyy년 M월 d일')
 * @returns {string} 변환된 날짜 문자열
 */
export const formatDate = (dateInput, formatStr = "yyyy-MM-dd") => {
  if (!dateInput) {
    return "";
  }

  try {
    const date = new Date(dateInput);
    return format(date, formatStr, { locale: ko });
  } catch (error) {
    console.error("날짜 변환 오류:", error);
    return "유효하지 않은 날짜";
  }
};
