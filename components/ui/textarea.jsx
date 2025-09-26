import Field from "./field";

export default function TextArea({ label, helperText, ...props }) {
  return (
    <Field label={label} helperText={helperText}>
      <textarea
        id={label}
        className="border border-[var(--gray-50)] rounded px-4 py-3 box-border resize-none"
        {...props}
      />
    </Field>
  );
}
