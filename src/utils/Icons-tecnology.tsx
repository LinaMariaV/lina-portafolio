import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaNodeJs,FaAngular, } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import SvelteLogo from "../app/icons/SvelteLogo";



const Iconst: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-start items-center opacity-60 space-x-8 mt-12 sm:space-x-12">
      {[
        { title: 'Javascript', Icon: SiJavascript, color: 'currentColor', size: 32 },
        { title: 'Svelte', Icon: SvelteLogo, color: 'currentColor', size: 30 },
        { title: 'VueJS', Icon: FaVuejs, color: 'currentColor', size: 30 },
        { title: 'ReactJS', Icon: FaReact, color: 'currentColor', size: 30 },
        { title: 'NodeJS', Icon: FaNodeJs, color: 'currentColor', size: 30 },
        { title: 'Angular', Icon: FaAngular, color: 'currentColor', size: 30 },  
      ].map(({ Icon, color, size, title }, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          animate={{ y: [0, -6, 0] }}  
          initial={{ opacity: 0 }}
          transition={{
            y: { 
              duration: 3, 
              delay: index * 0.2, 
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
          whileHover={{ scale: 1.15 }}
          title={title}
        >
          <Icon size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
};

export default Iconst;

