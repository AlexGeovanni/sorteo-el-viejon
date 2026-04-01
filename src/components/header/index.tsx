"use client";
import { usePathname } from "next/navigation";
import HeaderHome from "./headerHome";
import HeaderSecondary from "./headerSecondary";

export default function Header() {
  const pathname = usePathname();
  const IS_HOME_PAGE = pathname === "/";

  return (
    <>
      {IS_HOME_PAGE ? <HeaderHome /> : <HeaderSecondary />}
    </>
  );
}