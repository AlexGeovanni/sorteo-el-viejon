import { useEffect, useState } from "react";

export function useHasScrolled(offset = 150) {
    const [hasScrolled, setHasScrolled] = useState(false);
    // Fondo del navbar al scrollear
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return hasScrolled;
}