"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <Button onClick={() => signIn()} className="mt-10">
      카카오톡 로그인
    </Button>
  );
}
