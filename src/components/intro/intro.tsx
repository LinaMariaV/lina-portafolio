import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Iconst from "@/utils/Icons-tecnology";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="w-full max-w-6xl pl-18 pr-16 pt-[12vh] sm:pt-0 pb-0 flex flex-col sm:flex-row sm:space-x-12 sm:items-center sm:justify-start mx-auto relative">


      <motion.div
        className="flex flex-col items-start sm:w-2/3 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3 tracking-wide">
          Hello, I&#39;m
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
          className="text-xl sm:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6 flex items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full-Stack Developer <span className="text-4xl">|</span> Freelance
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-6 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionate about building <span className="font-semibold text-black dark:text-white">scalable digital solutions</span> that solve real problems.
          With <span className="font-semibold text-black dark:text-white">5+ years of experience</span>, I transform ideas into high-impact web products,
          focusing on clean code, performance, and user-centric design.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="#contact-cta"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 group"
          >
            Let&#39;s Build Something Together
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all duration-200"
          >
            View My Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Iconst />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center hidden sm:flex sm:w-1/3 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Image
          src="/lv-logo-grey.png"
          alt="Lina Villalba"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100vw, 150px"
          priority
        />
      </motion.div>
    </div>
  );
}
