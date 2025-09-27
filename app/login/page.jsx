import { auth } from "@/libs/utils/auth";
import GoogleLoginBtn from "./components/google-login-btn";

export default async function Page() {
  const session = await auth();
  console.log(session);
  return <GoogleLoginBtn />;
}
