import sorteoHeroImg from "@/assets/img/sorteo_viejon_home.webp";
import Image from "next/image";
import Link from "next/link";
import GlowBackground from "./ui/glowBackground";
export default function Hero() {
  const marqueeItems = Array.from({ length: 10 }).map((_, i) => (
    <div key={i} className="text-black flex items-center gap-2 md:text-[22px]">
      <div className="size-2 bg-black rounded-full"></div>
      <div>
        Próximo sorteo <span className="font-semibold">29 JUN</span>
      </div>
    </div>
  ));

  return (
    <section id="hero" className=" relative">
      <GlowBackground />
      <div className="flex justify-center pt-27.5 mb-12 px-[8px] 2xl:pt-[170px] ">
        <Image
          src={sorteoHeroImg}
          alt="Logo principal de Sorteos El Viejon"
          width={500}
          height={350}
          priority
          className="h-auto w-75 xs:w-90 md:w-120 lg:w-auto"
        />
      </div>
      <div className="2xl:mt-30 relative ">
        <div className="bg-linear-to-t border-0 border-transparent from-[rgba(255,255,255,0)] to-[#1E1E1E]  h-full block justify-center items-center rounded-t-[80px] sm:rounded-t-[110px] md:rounded-t-[150px] 2xl:rounded-t-[200px]">
          <div className="flex flex-col items-center gap-5 md:pt-8 md:pb-7 2xl:py-12 2xl:gap-8">
            <div className="mt-14 px-2 flex flex-col justify-center items-center gap-1 tablet:mt-7">
              <p className="text-sm mb-2 xs:text-lg tablet:text-xl xlm:2xl">
                Mas de <span className="font-bold">$120k en premios.</span>
              </p>
              <h1 className="text-lg xs:text-2xl text-center md:text-[40px] 2xl:text-6xl">
                ¡Arriesga poco y <span className="font-bold">GANA MUCHO</span>!
              </h1>
              <p className="text-sm text-center xs:text-base md:text-lg 2xl:md:text-[22px]">
                Sorteos ENTRE AMIGOS en base a LOTERIA NACIONAL
              </p>
            </div>
            <Link
              href={"/id-para-comprar-boletos"}
              aria-label="comprar boleto"
              className="bg-primary text-white py-2.5 px-5 rounded-full cursor-pointer transition duration-300 ease-in hover:bg-white hover:text-primary focus:bg-white focus:text-primary"
            >
              Compra boletos
            </Link>
          </div>
          <div
            className="w-full overflow-hidden relative h-[160px] mt-3.5 2xl:mt-8 "
            aria-hidden="true"
          >
            <div className="bg-[#74b5e457] absolute bottom-0 transform -translate-y-[30%] h-[85px] w-full overflow-hidden flex items-center gap-2 rotate-3 md:rotate-2"></div>
            <div className="bg-[#74B5E4] absolute top-0 transform translate-y-[60%] h-[85px] w-full overflow-hidden flex items-center gap-2 -rotate-3 md:-rotate-2">
              <div className="animate-optimized flex shrink-0 space-x-3 sorteos-marquee">
                {marqueeItems}
              </div>
              <div
                className="animate-optimized flex shrink-0 space-x-3 sorteos-marquee"
                aria-hidden="true"
              >
                {marqueeItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}