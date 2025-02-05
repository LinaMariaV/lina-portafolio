import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import SvelteLogo from "../app/icons/SvelteLogo";

const Iconst: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-8 mt-8 sm:space-x-12 md:space-x-16">
      {[
        { title: "Javascript", Icon: SiJavascript, color: "#fff7ed", size: 32 },
        { title: "Svelte", Icon: SvelteLogo, color: "#fff7ed", size: 30 },
        { title: "VueJS", Icon: FaVuejs, color: "#fff7ed", size: 30 },
        { title: "ReactJS", Icon: FaReact, color: "#fff7ed", size: 30 },
        { title: "NodeJS", Icon: FaNodeJs, color: "#fff7ed", size: 30 },
      ].map(({ Icon, color, size, title }, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center opacity-40 mb-4 sm:mb-6 md:mb-8"
          animate={{
            y: ["-5px", "5px"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: Math.random() * index,
          }}
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <Icon title={title} size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
};

export default Iconst;
