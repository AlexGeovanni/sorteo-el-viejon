import Lottie, { LottieRefCurrentProps } from "lottie-react";
import CasinoJackpot from "@/lottie/casinoJackpot.json";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  generateTickets: VoidFunction;
}

export default function CasinoAnimation({
  active,
  setActive,
  generateTickets,
}: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleExitComplete = () => {
    // Aquí sí generamos tickets y desmontamos
    generateTickets();
  };

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        lottieRef.current?.setSpeed(2.8);
      }, 0);
    }
  }, [active]);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex justify-center items-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="w-120  "
          >
            <div className="w-full -ml-3 xs:-ml-3.5 xsm:-ml-4.5">
                <Lottie
              lottieRef={lottieRef}
              animationData={CasinoJackpot}
              loop={2}
              onDOMLoaded={() => {
                lottieRef.current?.setSpeed(2.8);
              }}
              onComplete={() => {
                setActive(false);
              }}
            />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
