import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImageGallery() {
  return (
    <div className="relative aspect-square w-full my-4">
      <Image src="/sample.png" fill className="object-cover" alt="토끼" />
      <ul className="z-10 absolute bottom-3 left-1/2 flex gap-2 -translate-x-1/2">
        {
          <>
            <li>
              <button
                type="button"
                className="w-2 h-2 rounded-full bg-white opacity-50"
              ></button>
            </li>
            <li>
              <button
                type="button"
                className="w-2 h-2 rounded-full bg-white opacity-50"
              ></button>
            </li>
            <li>
              <button
                type="button"
                className="w-2 h-2 rounded-full bg-white opacity-50"
              ></button>
            </li>
          </>
        }
      </ul>
      <div className="relative z-10 top-1/2 -translate-y-1/2 w-[95%] mx-auto flex justify-between opacity-70">
        <Button
          size="icon"
          className="bg-transparent hover:bg-transparent left-3"
        >
          <img src="/pic-arr-left.png" alt="" aria-hidden="true" />
        </Button>
        <Button
          size="icon"
          className="bg-transparent right-3 hover:bg-transparent"
        >
          <img src="/pic-arr-right.png" alt="" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
