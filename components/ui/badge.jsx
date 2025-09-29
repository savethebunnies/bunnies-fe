export default function Badge({ text }) {
  return (
    <div className="bg-[#BBC9FF] px-2 py-1 rounded-full text-xs">
      <span className="relative top-[1px]">{text}</span>
    </div>
  );
}
