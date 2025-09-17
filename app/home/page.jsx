import Card from "@/components/ui/card";
import Banner from "./(sections)/banner";

export default function Page() {
  return (
    <main>
      <Banner />
      <section
        aria-labelledby="adoption-heading"
        aria-describedby="adoption-subtitle"
        className="bg-[var(--green-50)]"
      >
        <div className="pt-18 mx-4 text-center ">
          <h2 id="adoption-heading" className="text-xl font-semibold">
            가족을 기다리고 있어요
          </h2>
          <p id="adoption-subtitle" className="text-sm mt-1">
            하나뿐인 가족이 되어주세요
          </p>
          <div className="grid grid-cols-2 gap-2 py-9">
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
}
