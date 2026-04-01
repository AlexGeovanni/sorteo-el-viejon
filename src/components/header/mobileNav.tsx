import { navData } from "@/data/nav";
import { IconArrowUpRight, IconClose, IconMenu } from "@/icons";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface Props {
  isMenuOpen:boolean;
  isActiveBtn: string;
  setIsMenuOpen:(e:boolean)=>void;
  setIsActiveBtn: (id: string) => void;
}

export default function MobileNav({isMenuOpen, isActiveBtn, setIsActiveBtn, setIsMenuOpen }: Props) {
  return (
    <div className="block tablet:hidden tablet:opacity-0 tablet:pointer-events-none">
      <div className="w-6 h-6">
        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="size-8 cursor-pointer text-white flex items-center justify-center"
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      <div
        className={cn(
          "flex flex-col absolute top-19 bg-black left-0 right-0 py-5 transition-all duration-200",
          isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none",
        )}
      >
        {navData.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsActiveBtn(id)}
            className={cn(
              " text-white cursor-pointer relative font-normal bg-transparent h-auto py-2 px-5 sm:px-6  ",
              id === isActiveBtn && "text-[#E71D79]",
            )}
          >
            {label}
          </a>
        ))}
        <Link
          href={"/id-para-comprar-boletos"}
          className="w-1/2 mt-2 mx-auto flex gap-2 items-center justify-center bg-white text-[#E71D79] px-6 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#E71D79] hover:text-white "
        >
          Boletos <IconArrowUpRight className="size-5" />
        </Link>
      </div>
    </div>
  );
}
