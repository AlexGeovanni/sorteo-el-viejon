import rideimg from "@/assets/img/card-rider.png";
import Image from "next/image";
import { IconArrowUpRight } from "@/icons";
import Wrapper from "./wrapper";
import Link from "next/link";

export default function GridSorteos() {
  return (
    <Wrapper id="giveaways" className="pt-10">
      <h2 className="sr-only">Sorteos disponibles</h2>
      <div className="h-full w-full grid gap-4 tablet:gap-6 md:grid-cols-2 ">
        {
          //border-2  border-gray-950
          Array.from({ length: 4 }).map((_, i) => (
            <article
              key={i}
              className="h-75 xsm:h-100 md:h-80 lg:h-112 group [box-shadow:0_-10px_80px_-20px_#000000_inset] bg-black flex flex-col justify-between items-end cursor-pointer relative rounded-xl overflow-hidden md:col-span-1 "
            >
              <div>
                <div className="w-full z-0 rounded-md  overflow-hidden  absolute inset-0 md:right-0 top-0 transition-all duration-300 ease-out mask-[linear-gradient(to_top,transparent_18%,#000_100%)] group-hover:scale-105">
                  <Image
                    src={rideimg}
                    width={300}
                    height={300}
                    alt={`card-rider-${i + 1}`}
                    priority={i === 0}
                    className="h-auto w-full aspect-square object-cover md:object-fill"
                  />
                </div>
              </div>
              <div className="pointer-events-none z-10 flex w-full transform-gpu flex-col items-center gap-1 p-3 transition-all duration-300 group-hover:-translate-y-2 md:p-4 ">
                <h3 className="uppercase text-white font-normal md:text-lg">
                  6 DE JUNIO 2025
                </h3>
                <p className="font-bold text-gray-300 text-center text-lg xsm:text-xl lg:text-2xl ">
                  Honda CBR 600 PR+Bono Vip $300,000 MXN + Envío incluido
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-950/10"></div>
              <Link
                href={"/id-para-comprar-boletos"}
                aria-label={`Comprar boletos para sorteo ${i + 1}`}
                className="absolute z-40 top-4 right-4 text-sm flex items-center justify-center bg-white text-[#E71D79] px-4 py-1.5 tablet:px-6 tablet:py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#E71D79] hover:text-white focus:bg-[#E71D79] focus:text-white tablet:top-8 tablet:right-8"
              >
                Boletos
                <IconArrowUpRight className="size-4 tablet:size-5" />
              </Link>
            </article>
          ))
        }
      </div>
    </Wrapper>
  );
}
