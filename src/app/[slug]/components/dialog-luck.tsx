"use client";

import Dialog from "@/components/ui/dialog";
import { IconSelect } from "@/icons";
import { useEffect, useRef, useState } from "react";
import BoxSelect from "./box-select";
import { cn } from "@/utils/cn";
import { selectRandomTickets } from "@/utils/tickets";
import { typeTickets } from "@/data/tickets";
import CasinoAnimation from "./casinoAnimate";

interface form {
  whatsapp: string;
  fullname: string;
  surnames: string;
  location: string;
}

type Props = {
  tickets: typeTickets[];
  open: boolean;
  setOpen: (e: boolean) => void;
};

const defaultValues = {
  whatsapp: "",
  fullname: "",
  surnames: "",
  location: "",
};

export default function DiagolLuck({ tickets, open, setOpen }: Props) {
  const refDiv = useRef<HTMLDivElement>(null);
  const [isActiveSelect, setIsActiveSelect] = useState<boolean>(false);
  const [form, setForm] = useState<form>(defaultValues);
  const [ticketsGenerated, setTicketsGenerated] = useState<typeTickets[]>([]);
  const [valueGenerate, setValueGenerate] = useState<number | null>(null);
  const [activeCasinoAnimation, setActiveCasinoAnimation] =
    useState<boolean>(false);

  const handleStartCasinoAnimation = () => {
    if (!valueGenerate) return;
    setActiveCasinoAnimation(true);
  };

  const generateTickets = () => {
    if (!valueGenerate) return;
    const result = selectRandomTickets(tickets, valueGenerate);
    setTicketsGenerated(result);
  };

  const reset=()=>{
    setValueGenerate(null);
    setTicketsGenerated([]);
    setForm(defaultValues);

  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setIsActiveSelect(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onChange={(e: boolean) => {
          if (activeCasinoAnimation) return;
          setOpen(e);
          reset();
        }}
      >
        <div className=" flex flex-col w-full gap-1 items-center justify-center bg-transparent ">
          <div className="mb-4">
            <p className="font-bold text-2xl 2xl:text-3xl">
              ¿Boletos a generar
            </p>
          </div>
          <div className="flex items-center flex-col space-y-2.5 w-full md:space-y-0 md:space-x-2 md:flex-row">
            <div className="relative flex-1 w-full">
              <div
                className="border border-[#353535] bg-[#1E1E1E] w-full rounded-md cursor-pointer py-2.5 px-2 "
                onClick={() => setIsActiveSelect(!isActiveSelect)}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={isActiveSelect}
              >
                <div className="flex gap-2 justify-between items-center">
                  <div>
                    {valueGenerate ? valueGenerate : "Seleciona un número"}
                  </div>
                  <IconSelect className="size-3.5" />
                </div>
                {isActiveSelect && (
                  <div
                    ref={refDiv}
                    className="absolute bg-[#353535] w-full left-0 top-[48px] rounded-md z-50 overflow-hidden "
                  >
                    <div
                      role="listbox"
                      className=" max-h-[120px] h-full overflow-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar "
                    >
                      {Array.from({ length: 11 }).map((_, i) => (
                        <div
                          key={i}
                          role="option"
                          className="p-2 transition duration-300 ease-in-out hover:bg-[#1E1E1E]"
                          onClick={() => setValueGenerate(i + 1)}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              tabIndex={0}
              role="button"
              type="button"
              onClick={handleStartCasinoAnimation}
              className={cn(
                !valueGenerate && "bg-primary/70! text-gray-400! cursor-auto!",
                "w-full md:w-auto bg-primary cursor-pointer text-white py-3 px-5 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-primary focus:bg-white focus:text-primary",
              )}
              disabled={!valueGenerate}
            >
              Generar boletos al azar
            </button>
          </div>
          <div className="space-y-5 mt-4 w-full">
            <div 
            role="listbox"
            className="min-h-20 grid grid-cols-4 xs:grid-cols-4 xsm:grid-cols-7 gap-2">
              {ticketsGenerated.map((t, i) => (
                <BoxSelect
                  key={i}
                  value={Number(t.numero)}
                  handle={() => {}}
                  className="h-9"
                  disabled={false}
                />
              ))}
            </div>
            <div className=" flex justify-center w-full">
              <button
                tabIndex={0}
                type="button"
                className={cn(
                  (!valueGenerate || ticketsGenerated.length < 1) &&
                    "pointer-events-none text-gray-400! cursor-auto! border-primary/70",
                  "bg-transparent border border-primary w-1/2 cursor-pointer text-white py-2 px-5 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-primary focus:bg-white focus:text-primary",
                )}
                disabled={!valueGenerate || ticketsGenerated.length < 1}
              >
                Los quiero
              </button>
            </div>
          </div>
        </div>
        <CasinoAnimation
          active={activeCasinoAnimation}
          setActive={setActiveCasinoAnimation}
          generateTickets={generateTickets}
        />
      </Dialog>
    </>
  );
}
