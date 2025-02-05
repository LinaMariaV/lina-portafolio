import { motion } from "framer-motion";
import Iconst from "@/utils/Icons-tecnology";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full max-w-6xl px-16 sm:px-16 pt-[15vh] sm:pt-0 pb-0 flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:justify-start min-h-[90vh]">
      
      <motion.div
        className="flex flex-col items-start sm:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl text-orange-50 font-semibold mb-2 mt-6">
          Hi, my name is
        </h2>
        <motion.h1
          className="text-5xl text-violet-700 font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Lina Villalba.
        </motion.h1>
        <motion.p
          className="text-3xl text-orange-300 font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A passionate developer.
        </motion.p>
        <motion.p
          className="text-xl text-gray-200 text-left font-light"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Focused on creating interactive and accessible interfaces that provide
          a smooth and engaging user experience. My goal is to transform ideas
          into high-impact web products, always prioritizing usability and
          design.
        </motion.p>
        <Iconst />
      </motion.div>

      
      <motion.div
        className="flex flex-col items-center hidden sm:flex sm:w-1/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: .4, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
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
