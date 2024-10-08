import { motion } from "framer-motion";

export function Motion() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{
          x: [-50, 50, -30, 30, -10, 30, -30, 50, -50],
          y: [30, 10, 30],
          scale: [1, 2, 3, 2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="w-[170px] h-[170px] rounded-full bg-sky-500"
      />
    </div>
  );
}
