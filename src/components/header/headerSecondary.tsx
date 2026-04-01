import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useHasScrolled } from "@/hooks/useHasScrolled";

export default function HeaderSecondary() {
  const hasScrolled=useHasScrolled(); 

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Fondo del navbar */}
      <div
        aria-hidden="true"
        className={cn(
          "fixed top-0 left-0 w-full h-[85px] bg-linear-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,1)] to-black bg-opacity-80 transition-opacity duration-300",
          hasScrolled? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      <div className="max-w-360 px-2 sm:px-4 mx-auto h-[85px] flex items-center justify-between relative z-40">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo/icono-calavera.svg" alt="Logo" width={65} height={65} />
        </Link>
      </div>
    </header>
  );
}