
interface Props {
  children: React.ReactNode;
}

export default function CardSlide({ children }: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className=" overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray scrollbar"
      >
        <div className="flex gap-2 w-full pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
