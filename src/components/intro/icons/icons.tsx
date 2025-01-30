import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import SvelteLogo from "./SvelteLogo";
import { i } from "framer-motion/client";

const Icons: React.FC = () => {
  const radius = 100;
  const center = { x: 150, y: 150 };

  // Ajustamos los ángulos para 4 iconos
  const iconPositions = [0, 66, 132, 198, 270].map((angle) => ({
    x: center.x + radius * Math.cos((angle * Math.PI) / 180),
    y: center.y + radius * Math.sin((angle * Math.PI) / 180),
  }));

  return (
    <div className="relative h-[300px] w-[300px]">
      <svg className="absolute inset-0" width="300" height="300">
        {iconPositions.map((pos, i) => (
          <line
            key={i}
            x1={pos.x}
            y1={pos.y}
            x2={iconPositions[(i + 1) % iconPositions.length].x}
            y2={iconPositions[(i + 1) % iconPositions.length].y}
            stroke="#666"
            strokeWidth="2"
          />
        ))}
      </svg>

      {[
        { title: "Svelte", Icon: SvelteLogo, color: "#fff7ed", size: 55 },
        { title: "VueJS", Icon: FaVuejs, color: "#fff7ed", size: 60 },
        { title: "ReactJS", Icon: FaReact, color: "#fff7ed", size: 60 },
        { title: "NodeJS", Icon: FaNodeJs, color: "#fff7ed", size: 60 },
        { title: "Javascript", Icon: SiJavascript, color: "#fff7ed", size: 62 },
      ].map(({ Icon, color, size, title }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: iconPositions[index].x - 30,
            top: iconPositions[index].y - 30,
          }}
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

export default Icons;
