"use client";

import Option from "@/components/ui/option";
import { useState } from "react";
const options = [
  { label: "완료", id: "y" },
  { label: "미완료", id: "n" },
];
export default function NeuteredOptions() {
  const [selectedValue, setSelectedValue] = useState("미완료");

  return (
    <fieldset>
      <legend className="text-sm text-left mb-1">중성화 여부</legend>
      <div className="flex gap-10">
        {options.map((option) => {
          const { label, id } = option;
          return (
            <Option
              key={id}
              label={label}
              id={`neutered-${id}`}
              name="neutered"
              value={label}
              checked={selectedValue === `${label}`}
              onChange={() => setSelectedValue(label)}
            />
          );
        })}
      </div>
    </fieldset>
  );
}
