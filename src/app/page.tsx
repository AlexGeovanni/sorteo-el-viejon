import GridSorteos from "@/components/gridSorteos";
import Hero from "@/components/hero";
import InformationPay from "@/components/informationPay";
import Question from "@/components/question";

//max-w-[1440px] mx-auto
export default function Home() {
  return (
    <>
      <main className="min-h-dvh">
        <Hero />
        <GridSorteos />
        <Question />
        <InformationPay />
      </main>
    </>
  );
}