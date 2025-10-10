import Field from "./field";

//기본 인풋
export function Input({ label, type = "text", helperText, unit, ...props }) {
  return (
    <Field label={label} helperText={helperText}>
      <input
        type={type}
        id={props.id}
        name={props.id}
        required={true}
        autoComplete="off"
        className="border border-[var(--gray-50)] rounded h-12 px-4"
        {...props}
      />
      {unit && (
        <span className="absolute right-4 top-1/2 inline-block">{unit}</span>
      )}
    </Field>
  );
}
