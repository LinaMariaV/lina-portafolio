import { motion } from "framer-motion";
import Iconst from "@/utils/Icons-tecnology";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full max-w-6xl px-6 sm:px-8 pt-[12vh] sm:pt-0 pb-0 flex flex-col sm:flex-row sm:space-x-12 sm:items-center sm:justify-start min-h-[90vh]">
      
      <motion.div
        className="flex flex-col items-start sm:w-2/3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3 tracking-wide">
          Hello, I'm
        </h2>
        <motion.h1
          className="text-6xl sm:text-7xl font-bold text-black dark:text-white mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lina Villalba.
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Passionate Developer
        </motion.p>
        <motion.p
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I create interactive and accessible interfaces that provide smooth user experiences. 
          My goal is to transform ideas into high-impact web products with a focus on usability 
          and thoughtful design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Iconst />
        </motion.div>
      </motion.div>

      
      <motion.div
        className="flex flex-col items-center hidden sm:flex sm:w-1/3 opacity-40 dark:opacity-30"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image
          src="/lv-logo-grey.png"
          alt="Lina Villalba"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
}
