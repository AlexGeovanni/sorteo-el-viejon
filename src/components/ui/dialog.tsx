import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  open: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
};

export default function Dialog({ open, onChange, children }: Props) {
  const handleCloseModal = () => onChange(false);
  return (
    <AnimatePresence>
      {open && (
        <div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-100 bg-black/80  "
            onClick={handleCloseModal}
          ></motion.div>
          <motion.div
            onClick={(e) => e.stopPropagation()}
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
            className="fixed left-[50%] top-[50%] z-100 w-full max-w-lg 
      translate-x-[-50%] translate-y-[-50%] px-4 sm:px-0"
          >
            <div className="relative overflow-hidden flex flex-col gap-1 items-center justify-centers
             border border-[#1E1E1E]/0 bg-[#171717] p-3
      shadow-lg/30 ring-1 ring-[#E71D79]/40  shadow-[-1px_-3px_20px_-9px_#E71D79] rounded-md xs:p-5 tablet:p-6 ">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
