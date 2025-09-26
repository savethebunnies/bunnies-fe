"use client";

import { clsx } from "clsx";
import { useState } from "react";

export default function Select({ label, options, ...props }) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setOpen] = useState(false);
  const handleOptions = () => setOpen((prev) => !prev);

  return (
    <div className="text-left relative cursor-pointer">
      <label htmlFor={props.id}>{label}</label>
      <input type="hidden" name={props.name} id={props.id} value={selected} />
      <button
        type="button"
        onClick={handleOptions}
        className={`w-full border border-[var(--gray-50)] h-12 px-4 flex items-center relative ${
          isOpen ? "rounded-t" : "rounded"
        }`}
      >
        {selected}
        <img
          src="/dropdown.png"
          alt=""
          aria-hidden="true"
          className="w-6 h-6 absolute right-3 opacity-50"
        />
      </button>
      {isOpen && (
        <ul className="absolute bg-white z-1 w-full border border-t-0 rounded-b border-[var(--gray-50)]">
          {options?.map((option, index) => {
            const isSelected = option === selected;
            return (
              <li key={index} className="h-10 m-1">
                <button
                  type="button"
                  className={clsx(
                    "px-4 w-full h-full flex items-center rounded hover:bg-[var(--gray-50)]/30",
                    isSelected && "bg-[var(--gray-50)]/30"
                  )}
                  onClick={() => {
                    setSelected(option), handleOptions();
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
