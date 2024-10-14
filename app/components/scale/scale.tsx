import { useState } from "react";
import { motion } from "framer-motion";

export function Scale() {
  const [isBig, setIsBig] = useState(false);

  return (
    <motion.div
      className="w-full border border-white rounded-l cursor-pointer flex items-center justify-center"
      initial={false}
      animate={{
        height: isBig ? 200 : 100,
        // width: isBig ? 200 : 100,
      }}
      onClick={() => setIsBig((isBig) => !isBig)}
    >
      <p className="text-red-400">Click me</p>
    </motion.div>
  );
}
