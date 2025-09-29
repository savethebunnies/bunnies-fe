import Banner from "./_sections/banner";
import Adoption from "./_sections/adoption";
import Value from "./_sections/value";
import Footer from "@/components/ui/footer";

export default async function Page() {
  return (
    <main className="">
      <Banner />
      <Adoption />
      <Value />
      <Footer />
    </main>
  );
}
