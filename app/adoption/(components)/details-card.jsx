import Badge from "@/components/ui/badge";

export default function DetailsCard() {
  return (
    <div className="flex flex-col gap-1 pb-7 overflow-auto max-h-60">
      <div className="flex items-center gap-1 mb-3">
        <h3 className="text-lg font-bold relative top-[1px]">성훈이</h3>
        <Badge text="남아" />
      </div>
      <p className="flex gap-1">
        나이:<span>2000년생</span>
      </p>
      <p className="flex gap-1">
        몸무게:<span></span>kg
      </p>
      <p className="flex gap-1">
        구조장소:<span></span>
      </p>
      <p className="flex gap-1">
        특징:
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
          qui, facilis perspiciatis, asperiores nulla voluptatibus nostrum,
          totam mollitia ad exercitationem in odit? Quia non quam quidem atque
          quae modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Neque sit, voluptates esse, molestias vitae rerum officia incidunt
          repudiandae quidem molestiae voluptatem, quia soluta atque? Commodi
          perferendis eligendi tempore molestiae consequuntur?
        </span>
      </p>
    </div>
  );
}
