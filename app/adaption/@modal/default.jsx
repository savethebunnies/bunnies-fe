import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section>
      <div>
        <div>입양 공고</div>
        <Button variant="ghost" size="icon">
          <img src="/close.svg" alt="" className="w-3 h-3" />
        </Button>
      </div>
    </section>
  );
}
