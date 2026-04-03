import logoImg from "@/assets/img/footer_logo.webp";
import { IconArrowUpRight } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#181818] py-7 mt-10 lg:mt-20">
      <Wrapper className="flex flex-col tablet:items-start tablet:flex-row pt-2 md:pt-3 lg:pt-4">
        <div className="mx-auto tablet:mr-5">
          <Link href={"/"} aria-label="visitar página principal sorteos el viejon" className="w-60 block ">
            <Image
              src={logoImg}
              alt="logo-sorteos-el-viejon"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-center tablet:mt-0">
          <div className="flex px-2 gap-2 flex-col-reverse tablet:justify-between tablet:items-center tablet:flex-row">
            <div className="flex flex-1 mt-4 flex-wrap flex-col gap-2 md:space-x-4 justify-center items-center tablet:mt-0 tablet:block">
              <Link aria-label="Ir a politicas de privacidad" href={"/"} className="font-medium text-neutral-300 hover:text-white focus:text-white">Políticas de privacidad</Link>
              <Link aria-label="Ir a politicas de devoluciones" href={"/"} className="font-medium text-neutral-300 hover:text-white focus:text-white">Políticas de devoluciones</Link>
              <Link aria-label="Ir a terminos de uso" href={"/"} className="font-medium text-neutral-300 hover:text-white focus:text-white">Términos de uso</Link>
              <Link aria-label="Ir a legales" href={"/"} className="font-medium text-neutral-300 hover:text-white focus:text-white">Legales</Link>
            </div>
            <Link
              href={"/id-para-comprar-boletos"}
              aria-label="comprar boleto"
              className="w-1/2 mx-auto gap-1 flex items-center justify-center bg-white text-primary px-6 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-primary hover:text-white tablet:w-auto focus:bg-primary focus:text-white"
            >
              Boletos
              <IconArrowUpRight className="size-4.5" />
            </Link>
          </div>
          <div className="h-px bg-white my-4 lg:my-7"></div>
          <div className="flex flex-col px-2 gap-2.5 tablet:flex-row justify-between items-center">
            <div className="order-1 text-sm max-w-[28ch] leading-tight tablet:order-0 text-center tablet:text-left">
              Debes ser mayor de 18 años para participar en Sorteos el viejon
            </div>
            <div>
              <ul className="flex gap-x-4">
                <li>
                  <Link href={"/"} className="underline underline-offset-4 text-neutral-300 hover:text-white">Facebook</Link>{" "}
                </li>
                <li>
                  <Link href={"/"} className="underline underline-offset-4 text-neutral-300 hover:text-white">WhatsApp</Link>{" "}
                </li>
                <li>
                  <Link href={"/"} className="underline underline-offset-4 text-neutral-300 hover:text-white">Instagram</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="text-xs text-center mt-2 md:mt-4 xs:text-sm">
            &copy;2026 Sorteos el viejon. Todos los derechos reservados.
          </div>
    </footer>
  );
}
