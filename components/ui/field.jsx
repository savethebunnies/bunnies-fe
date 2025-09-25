"use client";
export default function Field({ label, helperText, children, ...props }) {
  return (
    <div className="flex flex-col text-left relative">
      {label && (
        <label htmlFor={props.id} className="text-sm mb-1">
          {label}
        </label>
      )}
      {children}
      {helperText && <p className="mt-1 text-xs">{helperText}</p>}
    </div>
  );
}
