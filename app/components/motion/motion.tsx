import { motion } from "framer-motion";

export function Motion() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{ x: [-100, 200, -500] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="w-[170px] h-[170px] rounded-full bg-sky-500"
      ></motion.div>
    </div>
  );
}
