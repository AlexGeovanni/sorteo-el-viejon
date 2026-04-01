import { IconClose } from "@/icons";
import { cn } from "@/utils/cn";

interface Props {
  value: number | string;
  handle: (value: string | number) => void;
  className?: string;
  disabled?: boolean;
}

export default function BoxSelect({
  value,
  handle,
  className,
  disabled = true,
}: Props) {
  return (
    <div
      aria-label={`Seleccionar boleto ${value}`}
      className={cn(
        "text-xs relative col-span-1 px-3 py-1.5 bg-primary rounded-[4px] flex gap-1 items-center justify-center xs:text-base font-semibold",
        className,
      )}
    >
      {value}
      {disabled && (
        <button
          type="button"
          aria-label="Eliminar boleto"
          className="cursor-pointer"
          onClick={() => handle(value)}
          disabled={!disabled}
        >
          <IconClose className="size-4.5 absolute -right-1 -top-1 p-1 rounded-full bg-primary" />
        </button>
      )}
    </div>
  );
}
