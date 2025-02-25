import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaNodeJs,FaAngular, } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import SvelteLogo from "../app/icons/SvelteLogo";



const Iconst: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center  opacity-50 space-x-8 mt-8 sm:space-x-12 md:space-x-16">
      {[
        { title: 'Javascript', Icon: SiJavascript, color: '#fff7ed', size: 32 },
        { title: 'Svelte', Icon: SvelteLogo, color: '#fff7ed', size: 30 },
        { title: 'VueJS', Icon: FaVuejs, color: '#fff7ed', size: 30 },
        { title: 'ReactJS', Icon: FaReact, color: '#fff7ed', size: 30 },
        { title: 'NodeJS', Icon: FaNodeJs, color: '#fff7ed', size: 30 },
        { title: 'Angular', Icon: FaAngular, color: '#fff7ed', size: 30 },  
      ].map(({ Icon, color, size, title }, index) => (
        <motion.div
          key={index}
          className="flex justify-center items-center opacity-10 mb-4 sm:mb-6 md:mb-8"
          animate={{ opacity: 1, y: [0, -10, 0] }}  
          initial={{ opacity: 0, y: -20 }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.3 }, 
            y: { duration: 0.5, delay: index * 0.2 }, 
          }}
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <Icon title={title} size={size} color={color} />
        </motion.div>
      ))}
    </div>
  );
};

export default Iconst;

