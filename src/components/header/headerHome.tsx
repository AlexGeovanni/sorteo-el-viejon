import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowUpRight } from "@/icons";
import MobileNav from "./mobileNav";
import { navData } from "@/data/nav";
import { cn } from "@/utils/cn";
import { useHasScrolled } from "@/hooks/useHasScrolled";

export default function HeaderHome() {
  const [isActiveBtn, setIsActiveBtn] = useState(navData[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef<Record<string, HTMLElement>>({});
  const hasScrolled = useHasScrolled();
  // Guardar referencias a las secciones
  useEffect(() => {
    navData.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionsRef.current[id] = el;
    });
  }, []);

  // Detectar scroll y actualizar navbar (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActiveBtn(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-80px 0px -50% 0px" }, // Ajusta offset de navbar
    );

    Object.values(sectionsRef.current).forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll smooth y hash desde URL al cargar
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionsRef.current[hash]) {
      requestAnimationFrame(() => {
        setIsActiveBtn(hash);
        sectionsRef.current[hash].scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  // Click en menú
  const handleClick = (id: string) => {
    setIsActiveBtn(id);
    sectionsRef.current[id]?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div
        aria-hidden="true"
        className={cn(
          "fixed top-0 left-0 w-full h-[85px] bg-linear-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,1)] to-black bg-opacity-80 transition-opacity duration-300",
          hasScrolled || isMenuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div className="max-w-360 px-2 sm:px-4 mx-auto h-[85px] flex items-center justify-between relative z-40">

        <a href="#hero">
          <Image
            src="/logo/icono-calavera.svg"
            alt="Logo"
            width={65}
            height={65}
          />
        </a>

        <nav className="hidden tablet:flex gap-x-1 p-1.5 rounded-full relative">
          {navData.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
              className={cn(
                "text-white cursor-pointer relative rounded-full font-satoshi font-normal bg-transparent h-auto py-1.5 pb-[7px] px-5 sm:px-6 text-sm",
                !(id === isActiveBtn) && "hover:text-[#E71D79] text-white/90",
              )}
            >
              {id === isActiveBtn && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute h-full inset-0 z-10 bg-[#E71D79] mix-blend-lighten"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {label}
            </a>
          ))}
        </nav>

        <Link
          href="/id-para-comprar-boletos"
          className="hidden tablet:flex gap-2 items-center bg-white text-[#E71D79] px-6 py-2 rounded-full cursor-pointer transition hover:bg-[#E71D79] hover:text-white"
        >
          Boletos <IconArrowUpRight className="size-5" />
        </Link>

        <MobileNav
          isMenuOpen={isMenuOpen}
          isActiveBtn={isActiveBtn}
          setIsMenuOpen={setIsMenuOpen}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
}
