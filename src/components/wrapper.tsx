import { cn } from "@/utils/cn";
interface Props {
    children:React.ReactNode
    className?: string;
}
export default function Wrapper({ children, className, ...props }: Props & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "max-w-360  w-full mx-auto px-2 pt-10 sm:px-4 md:pt-12 tablet:px-8 lg:pt-16 xlm:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
