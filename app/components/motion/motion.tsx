import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const containerVariants = {
  close: { width: 300, height: 100, transition: { duration: 0.5 } },
  open: { width: 200, height: 200, transition: { duration: 0.5 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.5 } },
};

export function Motion() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.div
      className="bg-gray-300 p-5 rounded-xl overflow-hidden pr-0"
      variants={containerVariants}
      animate={open ? "open" : "close"}
      onClick={handleClick}
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`flex ${open ? "flex-col" : "flex-row"}`}
      >
        <div>
          <h2 className="text-xl font-bold">title</h2>
          <p>description</p>
          <span className="i-lucide-cat" />
          <AnimatePresence>
            <motion.div
              className="text-sky-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Open Item
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          className={clsx("bg-green-300 p-3 rounded-lg w-full h-fit")}
          layout="message"
          initial={false}
          animate={{
            x: open ? 0 : 50,
            marginTop: open ? "1.25rem" : 0,
            marginLeft: open ? 0 : "1.25rem",
          }}
          transition={{
            type: "linear",
            duration: 0.5,
            stiffness: 500,
            damping: 30,
            dilay: 0.5,
          }}
          ease="easeInOut"
        >
          Message
          <AnimatePresence>
            <motion.span
              className="pl-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : 20,
              }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              Hello
            </motion.span>
          </AnimatePresence>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
