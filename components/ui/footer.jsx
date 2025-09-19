import Link from "next/link";
import { Button } from "./button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center ">
      <div className="bg-[var(--green-400)] py-12">
        <small className="text-white">
          © <time dateTime={year}>{year}</time> SaveTheBunnies. All rights
          reserved.
        </small>
        <div className="mt-8">
          <Button variant="ghost" size="icon" className="w-6 h-6">
            <Link
              href="https://www.instagram.com/save_the_bunnies_7/"
              target="_blank"
            >
              <img src="/instagram.png" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
