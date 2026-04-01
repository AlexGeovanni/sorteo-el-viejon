import Dialog from "@/components/ui/dialog";
import { locationData } from "@/data/location";
import { IconSelect, IconTicket } from "@/icons";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

interface form {
  whatsapp: string;
  fullname: string;
  surnames: string;
  location: string;
}

type Props = {
  valueSelect: string;
  open: boolean;
  setOpen: (e: boolean) => void;
};

const defaultValues = {
  whatsapp: "",
  fullname: "",
  surnames: "",
  location: "",
};

export default function DiagolRandom({
  valueSelect = "x 10 Boletos",
  open,
  setOpen,
}: Props) {
  const refDiv = useRef<HTMLDivElement>(null);
  const [isActiveSelect, setIsActiveSelect] = useState<boolean>(false);
  const [form, setForm] = useState<form>(defaultValues);

  const handleActiveSelect=(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault()
    if(isActiveSelect) return setIsActiveSelect(false)
    setIsActiveSelect(true)
  }

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name) {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onChangeLocation = (name: string, value: string) => {
    if (name && value) {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      setIsActiveSelect(false);
    }
  };

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
    <Dialog
      open={open}
      onChange={(e: boolean) => {
        setOpen(e);
        setForm(defaultValues);
      }}
    >
      <div className="space-y-3 xl:space-y-4 2xl:space-y-5">
        <div className="font-bold text-xl md:text-2xl text-center">¿Boletos a generar?</div>
        <div className="text-lg md:text-xl flex items-center justify-center gap-2">
          <span className="flex items-center gap-2"><IconTicket className="size-5" /> {valueSelect}</span>
          <span className="font-bold text-primary">seleccionado</span>
        </div>
        <form
          className="w-full flex flex-col items-center  justify-center  space-y-3 xl:space-y-4 2xl:space-y-5"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // console.log(form);
          }}
        >
          <div className="w-full  font-normal space-y-3 xl:space-y-4 2xl:space-y-5">
            <div>
              <label htmlFor="whatsapp" className="sr-only">
                WhatsApp
              </label>
              <input
                className="border bg-transparent border-[#1E1E1E] focus:border-[#353535] w-full rounded-md py-2.5 px-2  outline-none placeholder:text-sm autofill-fix"
                type="text"
                placeholder="WhatsApp*"
                name="whatsapp"
                id="whatsapp"
                autoComplete="off"
                required
                aria-required="true"
                value={form?.whatsapp}
                onChange={onChangeValue}
              />
            </div>
            <div>
              <label htmlFor="fullname" className="sr-only">
                Nombre
              </label>
              <input
                className="border bg-transparent border-[#1E1E1E] focus:border-[#353535] w-full rounded-md py-2.5 px-2  outline-none placeholder:text-sm autofill-fix"
                type="text"
                placeholder="Nombre*"
                name="fullname"
                id="fullname"
                required
                aria-required="true"
                value={form?.fullname}
                onChange={onChangeValue}
              />
            </div>
            <div>
              <label htmlFor="surnames" className="sr-only">
                Apellidos
              </label>
              <input
                className="border bg-transparent border-[#1E1E1E] focus:border-[#353535] w-full rounded-md py-2.5 px-2  outline-none placeholder:text-sm autofill-fix"
                type="text"
                placeholder="Apellidos*"
                name="surnames"
                id="surnames"
                required
                aria-required="true"
                value={form?.surnames}
                onChange={onChangeValue}
              />
            </div>
            <div ref={refDiv} className="relative">
              <div
                className={cn("border border-[#1E1E1E] w-full rounded-md ", isActiveSelect && "bg-[rgba(255,255,255,0.1)]")}>
                <button
                  type="button"
                  aria-expanded={isActiveSelect}
                  aria-haspopup="listbox"
                  className="flex gap-2 cursor-pointer py-2.5 px-2 justify-between items-center w-full"
                  onClick={(e) => handleActiveSelect(e)}
                >
                  <div>
                    {form?.location ? form.location : "Lugar de residencia"}
                  </div>
                  <IconSelect className="size-3.5" />
                </button>
                {isActiveSelect && (
                  <div
                    className="absolute bg-[#353535] w-full left-0 top-[48px] rounded-md z-50 overflow-hidden "
                  >
                    <div
                      role="listbox"
                      className="p-1 max-h-30 h-full overflow-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar "
                    >
                      {locationData.map((l, i) => (
                        <div
                          key={`${l.residence}-${i}`}
                          tabIndex={0}
                          role="button"
                          className="rounded-md p-2 transition duration-300 ease-in-out hover:bg-[#535353] cursor-pointer focus:bg-[#535353]"
                          onClick={() =>
                            onChangeLocation("location", l.residence)
                          }
                        >
                          {l.residence}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
          tabIndex={0}
            type="submit"
            className="bg-primary max-w-1/2 w-full text-white py-2 px-5 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-primary focus:bg-white focus:text-primary"
          >
            Apartar
          </button>
        </form>
        <div className="text-xs text-balance text-center">
          *Al finalizar serás redirigido a Whatsapp para enviar la información
          de tu boleto
        </div>
      </div>
    </Dialog>
  );
}
