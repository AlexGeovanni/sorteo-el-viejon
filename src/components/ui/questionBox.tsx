import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface PropsQuest {
  title: string;
  boldTitle: string;
  children: ReactNode;
  src: StaticImageData | string;
  imageAlt?: string;
}

export default function QuestionBox({
  title,
  boldTitle,
  children,
  src,
  imageAlt,
}: PropsQuest) {
  return (
    <article className="p-4 bg-[#1E1E1E] rounded-[18px] sm:p-6 tablet:p-8 2xl:p-10">
      <div className="flex flex-col items-start justify-start gap-6 md:flex-row md:gap-7 2xl:gap-10">
        <div className="">
          <Image
            src={src}
            alt={imageAlt ?? `Imagen ilustrativa sobre ${title.toLowerCase()}`}
             width={650}
            height={450}
            className="h-auto aspect-3/2 object-cover rounded-xl md:max-w-50 md:aspect-[3.2/3]"
          />
        </div>
        <div>
          <h3 className="xs:text-xl font-semibold md:text-2xl xl:text-[28px] 2xl:text-3xl">
            ¿{title} <span className="text-[#E71D79]">{boldTitle}</span>?
          </h3>
          <div className="mt-3 [&_p]:leading-tight [&_p]:text-sm xs:[&_p]:text-base md:[&_p]:text-base xl:[&_p]:text-balance 2xl:[&_p]:text-lg md:mt-5 md:text-[18px] 2xl:mt-7">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
