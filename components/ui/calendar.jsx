"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Input } from "./input";
import { formatDate } from "@/utils/date-utils";

export default function Calender({ date }) {
  if (!date) {
    date = new Date();
  }
  const [selectedDate, setSelectedDate] = useState(date);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleDaySelect = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false);
  };

  return (
    <div className="relative">
      <Input
        label="구조 날짜"
        type="text"
        readOnly
        value={formatDate(selectedDate)}
        onClick={() => setCalendarOpen((prev) => !prev)}
      />
      {isCalendarOpen && (
        <div className="absolute z-50 mt-2 bg-white shadow-xl rounded-lg p-3 top-full left-0">
          <DayPicker
            animate
            mode="single"
            selected={selectedDate}
            navLayout="around"
            onSelect={handleDaySelect}
            classNames={{
              chevron: `fill-[var(--primary)]`,
              today: `border-[var(--black]`,
              selected: `bg-[var(--primary)] border-[var(--primary)] text-white rounded-full`,
              day: `hover:bg-[var(--gray-50)] rounded-full`,
            }}
          />
        </div>
      )}
    </div>
  );
}
