import BankAccountDetails from "../ui/bankAccountDetails";
import CardSlide from "./cardSlide";
import Wrapper from "../wrapper";
import { infoPay } from "@/data/payInfo";

export default function InformationPay() {
  return (
    <Wrapper id="methodPay" className="">
      <div className="w-ull text-center flex flex-col justify-center items-center space-y-1">
        <p className=" md:text-xl 2xl:text-2xl">
          Pagos <span>100% seguros</span>
        </p>
        <h2 className="title-h">
          <span className="font-bold">INFORMACIÓN DE PAGO</span>
        </h2>
        <p className="text-balance leading-tight md:text-lg 2xl:text-xl ">
          Debes realizar el pago por alguna de éstas opciones y enviar tu
          comprobante de pago al:
        </p>
      </div>
      <div className="w-full mt-4.5 2xl:mt-5">
        <button
          tabIndex={0}
          type="button"
          className="mx-auto font-medium gap-2 flex items-baseline justify-center text-white bg-primary px-6 py-3 rounded-full cursor-pointer transition duration-300 ease-in-out hover:text-primary hover:bg-white md:w-auto focus:text-primary focus:bg-white"
        >
          Whatsapp <span className="text-sm">645 110 2628</span>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-10">
        <div className="col-span-full lg:col-span-3 border border-[#0098FF] rounded-xl overflow-hidden">
          <div className="bg-[#0098FF] p-4 w-full h-[90px] text-center flex flex-col items-center justify-center text-black">
            <h3 className="font-bold text-xl md:text-2xl 2xl:text-3xl ">
              Exclusivo transferencias y cajero
            </h3>
            <p className="text-sm md:text-base">*Tu nombre en concepto de pago</p>
          </div>
          <div className="p-3 lg:p-5">
            <CardSlide>
              {infoPay[0].card.map((p, i) => (
                <BankAccountDetails
                  key={i+p.logo}
                  imgUrl={p.logo}
                  name={p.name}
                  cardNumber={p.cardNumber}
                  keyNumber={p.keyNumber}
                  accountNumber={p.accountNumber}
                  className="min-w-64 w-full "
                  style={{ width: "calc(100% / 3 - 14px)" }}
                />
              ))}
            </CardSlide>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 border border-[#F1911B] rounded-xl overflow-hidden">
          <div className="bg-[#F1911B] p-4 w-full h-[90px] text-center flex flex-col items-center justify-center text-black">
            <h3 className="font-bold text-xl md:text-2xl 2xl:text-3xl">
              Pago en oxxo, 7eleven, farmacias
            </h3>
          </div>
          <div className="p-3 lg:p-5">
            <CardSlide>
              {infoPay[1].card.map((p, i) => (
                <BankAccountDetails
                  key={i+p.logo}
                  imgUrl={p.logo}
                  name={p.name}
                  cardNumber={p.cardNumber}
                  keyNumber={p.keyNumber}
                  accountNumber={p.accountNumber}
                  className="min-w-64 w-full "
                  style={{ width: "calc(100% / 3 - 14px)" }}
                />
              ))}
            </CardSlide>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
