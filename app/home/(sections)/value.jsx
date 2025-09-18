import Inner from "../(components)/inner";

export default function Value() {
  return (
    <section aria-labelledby="value-heading" className="bg-[#DEEBDD]">
      <Inner
        section="value"
        heading={
          <>
            <span
              aria-hidden="true"
              lang="en"
              className="block text-base text-[var(--primary)]"
            >
              Save the Bunnies
            </span>
            세이브 더 버니즈
          </>
        }
        subtitle="세더버는 아래의 가치를 중심으로 활동하고 있어요!"
      ></Inner>
    </section>
  );
}
