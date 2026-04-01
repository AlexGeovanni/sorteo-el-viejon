import winImg from "@/assets/img/img-win.png";
import { IconFacebook, IconWhatsApp } from "@/icons";
import QuestionBox from "./ui/questionBox";
import Wrapper from "./wrapper";
import Link from "next/link";

export default function Question() {
  return (
    <Wrapper id="questionsasked">
      <div className="rounded-2xl xs:rounded-3xl border-2 border-[#1E1E1E] overflow-hidden md:rounded-[18px]">
        <div className=" flex flex-col items-center pb-10 pt-4 xs:pt-8 md:pt-10 md:pb-18">
          <div className="mb-2 xs:mb-6 md:mb-11 2xl:mb-10">
            <h2 className="text-lg font-semibold xs:text-[22px] tracking-[0.025rem] text-center xsm:text-[28px] md:text-[32px] lg:text-[38px] 2xl:text-5xl">
              ¿PREGUNTAS <span className="font-extrabold">FRECUENTES</span>?
            </h2>
          </div>
          <div className="max-w-[950px] px-2 space-y-4 md:space-y-5 xl:space-y-7.5 2xl:max-w-300 2xl:space-y-8.75">
            <QuestionBox
              title="CÓMO SE ELIGE A LOS"
              boldTitle="GANADORES"
              src={winImg}
              imageAlt="Ilustracion de seleccion de ganadores"
            >
              <p>
                Todos nuestros sorteos se realizan en base a la{" "}
                <span className="font-bold underline underline-offset-4">
                  Lotería Nacional para la Asistencia Pública Mexicana.
                </span>
              </p>
              <p className="mt-3 md:mt-5 2xl:mt-7">
                El ganador de Sorteos El Viejón será el participante cuyo número
                de boleto coincida con las últimas cifras del primer premio
                ganador de la Lotería Nacional (las fechas serán publicadas en
                nuestra página oficial).
              </p>
            </QuestionBox>
            <QuestionBox
              title="QUÉ PASA SI EL GANADOR ES UN"
              boldTitle="BOLETO NO VENDIDO"
              src={winImg}
              imageAlt="Ilustracion de sorteo con boleto no vendido"
            >
              <p>
                Se elige un nuevo ganador realizando la misma dinámica en otra
                fecha cercana{" "}
                <span className="font-bold ">
                  (se anunciará la nueva fecha).
                </span>
              </p>
              <p className="mt-3 md:mt-5 2xl:mt-7">
                Lo que significa que, ¡Tendrías el doble de oportunidades de
                ganar con tu mismo boleto!
              </p>
            </QuestionBox>
            <QuestionBox
              title="DONDE SE PÚBLICA A LOS"
              boldTitle="GANADORES"
              src={winImg}
              imageAlt="Ilustracion de publicacion de ganadores"
            >
              <p>
                En nuestra{" "}
                <span className="font-bold ">
                  página oficial de Facebook Sorteos El Viejón
                </span>{" "}
                puedes encontrar todos y cada uno de nuestros sorteos anteriores
              </p>
              <p className="mt-3 md:mt-5 2xl:mt-7">
                De igual forma podrás ver las transmisiones en vivo con Lotería
                Nacional y las entregas de premios a los ganadores!
              </p>
            </QuestionBox>
          </div>
        </div>
        <div className="w-full px-2 py-5 bg-[#E71D79] flex gap-x-2 flex-col justify-between sm:p-6 tablet:p-8 md:flex-row md:px-12.5 md:items-center">
          <article className="lg:max-w-3/5 leading-tight space-y-1 text-sm xs:text-base 2xl:text-lg">
            <p>
              *La fecha de los sorteos está condicionada a la venta del 60% de
              los boletos.
            </p>
            <p>
              *Encuentra transmisión en vivo de los sorteos en nuestra página de
              Facebook en las fechas indicadas a las 20:00 hrs CDMX. ¡No te lo
              pierdas!.
            </p>
          </article>
          <article className="w-42.5 mt-3 flex gap-4 justify-start items-centes md:mt-0 md:justify-end">
            <Link href={"/"} aria-label="Visitar Facebook de Sorteos El Viejon">
              <IconFacebook className="size-9 cursor-pointer transition-transform duration-200 ease-in hover:scale-110" />
            </Link>
            <Link
              href={"/"}
              aria-label="Contactar por WhatsApp a Sorteos El Viejon"
            >
              <IconWhatsApp className="size-9 cursor-pointer transition-transform duration-200 ease-in hover:scale-110" />
            </Link>
          </article>
        </div>
      </div>
    </Wrapper>
  );
}
