import { cn } from "@/utils/cn";
import Image from "next/image";

interface Props {
    imgUrl:string;
    name:string;
    cardNumber:string;
    keyNumber:string;
    accountNumber:string;
    className?:string
}

export default function BankAccountDetails(props:Props & React.HTMLAttributes<HTMLElement>) {

    const {imgUrl,name,cardNumber,keyNumber,accountNumber,className,...articleProps}=props

  return (
    <article className={cn("bg-[#1E1E1E] text-white p-4 pr-10 rounded-[18px] select-text ",className)}
    // {...articleProps}
    >
      <div className="flex justify-center">
        <Image
          className="aspect-auto w-full h-auto object-scale-down"
          src={imgUrl ?? "/logo/citibanamex.svg"}
          alt="Imagen de banco"
          width={100}
          height={80}
        />
      </div>
      <div className="space-y-4 mt-6">
        <div className="space-y-1">
          <p className="text-sm text-gray-300">Nombre:</p>
          <p className="font-medium text-balance">{name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-300">No. de tarjeta:</p>
          <p className="font-medium">{cardNumber}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-300">Clabe:</p>
          <p className="font-medium">{keyNumber}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-300">Cuenta:</p>
          <p className="font-medium">{accountNumber}</p>
        </div>
      </div>
    </article>
  );
}
