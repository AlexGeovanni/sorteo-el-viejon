"use client";
import rideimg from "@/assets/img/card-rider.png";
import { ChangeEvent, useState } from "react";
import BoxSelect from "./components/box-select";
import DiagolRandom from "./components/dialog-random";
import DiagolLuck from "./components/dialog-luck";
import { IconArrowUpRight, IconSearch, IconTicket } from "@/icons";
import { cn } from "@/utils/cn";
import Wrapper from "@/components/wrapper";
import { typeTickets } from "@/data/tickets";
import { useRouter } from "next/navigation";
import { ticketsDataMerge } from "@/utils/tickets";
import Image from "next/image";
import Link from "next/link";
import GlowBackground from "@/components/ui/glowBackground";

type TypeTicketsMerge = typeTickets & { select: boolean };

export default function Home() {
  const router = useRouter();
  const [searchValue, SetSearchValue] = useState<string>("");
  const [tickets, setTickets] = useState<TypeTicketsMerge[]>(ticketsDataMerge);

  const [openRandom, setOpenRandom] = useState<boolean>(false);
  const [openLuck, setOpenLuck] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState<string>("");

  const goHome = () => {
  router.push("/",{
    scroll: false,
  })
};

  const handleOpenLuck = () => {
    resetSelected();
    setOpenLuck(true);
  };

  const HandleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      SetSearchValue(value);
    }
  };

  const handleTicketRandom = (value: string) => {
    if (value.length > 0) {
      setValueSelect(value);
      setOpenRandom(true);
    }
  };

  const toggleSeleccion = (id: number) => {
    setTickets((prev) =>
      prev.map((b) =>
        b.id === id && !b.vendido ? { ...b, select: !b.select } : b,
      ),
    );
  };

  const handleSearchNumber = () => {
    setTickets(ticketsDataMerge.filter((b) => b.numero.includes(searchValue)));
  };
  // resetear todo los seleccionados
  const resetSelected = () => {
    setTickets((prev) =>
      prev.map((ticket) => ({
        ...ticket,
        select: false,
      })),
    );
  };

  // Comprar seleccionados
  const comprarSeleccionados = () => {
    setTickets((prev) =>
      prev.map((b: TypeTicketsMerge) =>
        b.select
          ? {
              ...b,
              vendido: true,
              seleccionado: false,
              comprador: null,
            }
          : b,
      ),
    );
  };

  // 📊 Contador
  const selected = tickets.filter((b) => b.select);
  const total = selected.reduce((a, b) => {
    return a + b.precio;
  }, 0);

  return (
    <>
      <main className="relative">
        <Wrapper className="xl:py-2 xl:pt-6 bg-transparent mt-12 tablet:mt-20">
          <div>
            <button
              tabIndex={0}
              type="button"
              onClick={goHome}
              className="cursor-pointer text-sm flex items-center gap-1 border border-[#171717]/0 py-2 px-3 rounded-lg transition-colors duration-300 ease-out hover:bg-[#171717] focus:bg-[#171717]"
            >
              <IconArrowUpRight className="rotate-225 size-5" /> Volver
            </button>
          </div>
        </Wrapper>
        <section className="min-h-svh ">
          <GlowBackground colorStrong="231,29,120" colorSoft="231,29,120" />
          <Wrapper className="xl:pt-5">
            <div className="max-w-245  mx-auto  group  bg-black flex flex-col justify-between items-end cursor-pointer relative rounded-xl overflow-hidden md:col-span-1 ">
              <div className="w-full h-75 sm:h-90 md:h-130 rounded-md [mask-image:linear-gradient(to_top,transparent_10%,#000_80%)]  ">
                <Image
                  src={rideimg}
                  width={300}
                  height={500}
                  alt="Motocicleta Honda CBR 600 del sorteo de junio 2025"
                  priority
                  className="h-full w-full aspect-square object-cover sm:object-fill"
                />
              </div>
              {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-950/10"></div> */}
              <div className="-mt-23 pointer-events-none  flex w-full transform-gpu flex-col items-center gap-1 p-4  ">
                <h3 className="uppercase text-white font-normal md:text-lg">
                  6 DE JUNIO 2025
                </h3>
                <h1 className="font-bold text-gray-300 text-xl md:text-2xl text-center ">
                  Honda CBR 600 PR + Bono Vip $300,000 MXN + Envío incluido
                </h1>
              </div>
            </div>
          </Wrapper>
          <Wrapper className="lg:grid lg:grid-cols-5 xl:gap-4">
            <div className="col-span-3 space-y-4 mt-8">
              <div className="flex flex-col gap-3 md:flex-row">
                <button
                  tabIndex={0}
                  aria-label="maquina de la suerte"
                  type="button"
                  className="text-primary bg-white py-2 px-5 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                  onClick={handleOpenLuck}
                >
                  Maquina de la suerte
                </button>
                <div className="flex-1 border py-px bg-white rounded-full flex items-center">
                  <input
                    type="text"
                    className=" rounded-full px-5 pr-12 w-full h-full outline-none border-none text-black"
                    placeholder="Buscar boleto"
                    value={searchValue}
                    onChange={HandleChangeValue}
                  />
                  <button
                    tabIndex={0}
                    type="button"
                    aria-label="buscar boleto"
                    onClick={handleSearchNumber}
                    className="group cursor-pointer border border-transparent bg-[#1f1f1f] -ml-10 rounded-full p-2 transition-all duration-300 ease-in hover:bg-[#1f1f1f]/90"
                  >
                    <IconSearch className="size-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.25)] rounded-2xl py-4 px-2 space-y-6 xl:space-y-8">
                <div className="min-h-100 max-h-100 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar ">
                  <div className="w-full px-2 grid grid-cols-5 xs:grid-cols-7 gap-1.5 xsm:grid-cols-8 sm:grid-cols-9 md:grid-cols-11 lg:grid-cols-9 xl:grid-cols-12 lg:gap-2">
                    {tickets?.map((t, i) => (
                      <button
                        key={`${t.id}-${i}`}
                        onClick={() => toggleSeleccion(t.id)}
                        disabled={t.select || t.vendido}
                        className={cn(
                          "bg-gray-300 text-sm cursor-pointer flex justify-center items-center p-2 px-6 text-black rounded-lg col-span-1 md:text-base",
                          (t.select || t.vendido) &&
                            "bg-primary/85! text-gray-300",
                        )}
                      >
                        {Number(t.numero)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-full  flex flex-col items-center justify-center gap-3">
                  <div className="w-full grid grid-cols-5 xs:grid-cols-7 gap-2 xsm:grid-cols-8 sm:grid-cols-9 md:grid-cols-11 lg:grid-cols-9 xl:grid-cols-12 lg:gap-2 pr-1">
                    {selected?.map((s, i) => (
                      <BoxSelect
                        key={`${s.id}-${i}`}
                        value={Number(s.numero)}
                        handle={() => toggleSeleccion(s.id)}
                      />
                    ))}
                  </div>
                  <button
                    tabIndex={0}
                    aria-label="comprar boleto"
                    type="button"
                    className="text-white bg-transparent border-2 border-primary py-2 px-5 
                    rounded-full cursor-pointer transition duration-300 ease-in-out hover:text-primary hover:bg-white focus:text-primary focus:bg-white"
                  >
                    Apartar boleto
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 px-3 pt-10 lg:pt-0">
              <div className="flex gap-2">
                <div className="w-full flex flex-col justify-center items-center space-y-2">
                  <p className="text-base">Precio normal</p>
                  <button
                    tabIndex={0}
                    aria-label="comprar boleto normal"
                    type="button"
                    className="group w-full flex items-center justify-center gap-1 font-bold text-white bg-primary py-2 px-5 rounded-full cursor-pointer transition duration-300 ease-in-out hover:text-primary hover:bg-white focus:bg-white focus:text-primary"
                    onClick={() => handleTicketRandom("x1 Boleto")}
                  >
                    <IconTicket className="size-5 " /> x1 $9 MXN
                  </button>
                </div>
                <div className="w-full flex flex-col justify-center items-center space-y-2">
                  <p className="text-base">PROMOCION</p>
                  <button
                    tabIndex={0}
                    aria-label="comprar boleto normal"
                    type="button"
                    className="group w-full flex items-center justify-center gap-1 font-bold text-white bg-primary py-2 px-5 rounded-full cursor-pointer transition duration-300 ease-in-out hover:text-primary hover:bg-white focus:bg-white focus:text-primary"
                    onClick={() => handleTicketRandom("x10 Boleto")}
                  >
                    <IconTicket className="size-5" /> x10 $80 MXN
                  </button>
                </div>
              </div>
              <div className="mt-7 text-xl flex flex-col gap-5 2xl:gap-[28px] ">
                <div className="text-center space-y-2 2xl:space-y-4 ">
                  <p>
                    <span className="font-bold ">Bono VIP, </span>si compraste
                  </p>
                  <div className="flex justify-center items-center gap-2 ">
                    <IconTicket className="size-5" /> x10 Boletos{" "}
                    <span className="text-primary font-bold">$10,000 MXN</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 ">
                    <IconTicket className="size-5" /> x10 Boletos{" "}
                    <span className="text-primary font-bold">$10,000 MXN</span>
                  </div>
                  <div className="flex justify-center items-center gap-2 ">
                    <IconTicket className="size-5" /> x10 Boletos{" "}
                    <span className="text-primary font-bold">$10,000 MXN</span>
                  </div>
                </div>
                <div className="text-center space-y-2 2xl:space-y-4 ">
                  <p>
                    <span className="font-bold">Bono pronto pago,</span> valido
                    31 de Mayo
                  </p>
                  <p className="font-bold text-primary ">$10,000 MXN</p>
                </div>
                <div className="text-center space-y-2 2xl:space-y-4 ">
                  <p className="text-bold">Bonos válidos</p>
                  <p className="text-base">
                    Pagando dentro de las primeras 3 horas
                  </p>
                </div>
                <div className="text-center space-y-2 2xl:space-y-4 ">
                  <p className="font-bold">
                    Nuestro canal de{" "}
                    <Link href={"/"} aria-label="" className="underline underline-offset-2">
                      Whatsapp
                    </Link>
                  </p>
                  <p className="text-base text-wrap">
                    Para participar por los bonos y compartir cualquiera de
                    nuestra publicaciones
                  </p>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
        <DiagolRandom
          valueSelect={valueSelect}
          open={openRandom}
          setOpen={setOpenRandom}
        />
        <DiagolLuck
          tickets={tickets.filter((t) => !(t.select || t.vendido))}
          open={openLuck}
          setOpen={setOpenLuck}
        />
      </main>
    </>
  );
}
