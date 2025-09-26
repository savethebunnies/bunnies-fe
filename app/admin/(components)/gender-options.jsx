"use client";

import { useState } from "react";
import Option from "@/components/ui/option";

const options = [
  { label: "남아", id: "m" },
  { label: "여아", id: "f" },
  { label: "불확실", id: "u" },
];
export default function GenderOptions() {
  const [selectedValue, setSelectedValue] = useState("불확실");
  return (
    <fieldset>
      <legend className="text-sm text-left">성별</legend>
      <div className="flex gap-10">
        {options.map((option) => {
          const { label, id } = option;
          return (
            <Option
              key={id}
              label={label}
              id={`gender-${id}`}
              name="gender"
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
