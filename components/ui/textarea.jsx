import Field from "./field";

export default function TextArea({ label, helperText, ...props }) {
  return (
    <Field label={label} helperText={helperText}>
      <textarea
        id={label}
        className="bg-gray-100 border-b px-4 resize-none"
        {...props}
      />
    </Field>
  );
}
