import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
type CardProps = {
  title: string;
  description: string;
  duoDate: Date;
  open: boolean;
  onClick: () => void;
};

function CloseCard({ title, description, onClick }: CardProps) {
  return (
    <motion.div
      className="py-3 sm:py-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {description}
          </p>
        </div>

        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function OpenCard({ title, description, onClick }: CardProps) {
  return (
    <motion.div
      className="py-3 sm:py-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <p>{title}</p>
      <p>{description}</p>
    </motion.div>
  );
}

const containerVariants = {
  close: { height: 100 },
  open: { height: 200 },
};

export function Card({ title, description, open, onClick }: CardProps) {
  return (
    <motion.div
      className="w-full border border-white rounded-2xl cursor-pointer"
      initial={false}
      animate={open ? "open" : "close"}
      variants={containerVariants}
      onClick={() => onClick()}
    >
      <p>{title}</p>
      <p>{description}</p>
    </motion.div>
  );
}
