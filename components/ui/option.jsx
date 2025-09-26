export default function Option({ label, checked, ...props }) {
  return (
    <div className="relative">
      <label
        htmlFor={props.id}
        className="cursor-pointer flex items-center gap-3"
      >
        <input
          type="radio"
          name={props.name}
          value={props.value}
          id={props.id}
          checked={checked}
          className="sr-only"
          {...props}
        />
        <div className="border border-[var(--gray-50)] w-5 h-5 rounded-full flex items-center justify-center">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              checked ? "bg-[var(--primary)]" : "bg-white"
            }`}
          />
        </div>

        <span>{label}</span>
      </label>
    </div>
  );
}
