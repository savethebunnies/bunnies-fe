export default function Badge({ text }) {
  return (
    <div className="bg-[#BBC9FF] px-2 py-[3px] rounded-full text-xs">
      <span className="relative top-[1px]">{text}</span>
    </div>
  );
}
