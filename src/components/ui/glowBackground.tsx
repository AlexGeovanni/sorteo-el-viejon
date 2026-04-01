import { cn } from "@/utils/cn";

interface GlowBackgroundProps {
  className?: string;
  colorStrong?: string;
  colorSoft?: string;
  strongOpacity?: number;
  softOpacity?: number;
}

export default function GlowBackground({
  className,
  colorStrong = "241,145,27",
  colorSoft = "241,145,27",
  strongOpacity = 0.25,
  softOpacity = 0.1,
}: GlowBackgroundProps) {
  const gradient = `radial-gradient(
    circle,
    rgba(${colorStrong},${strongOpacity}) -50%,
    rgba(${colorSoft},${softOpacity}) 25%,
    transparent 72%
  )`;
  return (
    <>
      <div
        className={cn(
          "min-h-dvh w-full overflow-hidden absolute inset-0 -z-20",
          className,
        )}
      >
        <div
          className="absolute top-0 left-0 -translate-x-[45%] -translate-y-[15%] h-120 w-120 md:w-155 md:h-155 lg:h-200 lg:w-200 rounded-full opacity-70"
          style={{
            background: gradient,
          }}
        />
        <div
          className="absolute top-0 right-0 translate-x-[45%] -translate-y-[15%] h-120 w-120 md:w-155 md:h-155 lg:h-200 lg:w-200 rounded-full opacity-70"
          style={{
            background: gradient,
          }}
        />
      </div>
    </>
  );
}
