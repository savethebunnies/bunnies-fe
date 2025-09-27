"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function GoogleLoginBtn() {
  return (
    <Button onClick={() => signIn()} className="mt-10">
      구글로 로그인
    </Button>
  );
}
