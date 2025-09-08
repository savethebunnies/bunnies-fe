import { InputHTMLAttributes, ReactNode } from "react";

type InputPT = {
  label: ReactNode;
  name: string;
  error?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  name,
  error,
  helperText,
  ...props
}: InputPT) {
  return (
    <div className="w-full">
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} name={name} {...props} className="border" />
      {helperText && <p>{helperText}</p>}
    </div>
  );
}
