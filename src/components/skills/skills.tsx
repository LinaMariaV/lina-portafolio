import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Separator from "../separator/separator";

const skillsData = [
  {
    id: 1,
    icon: <FaHtml5 className="text-black dark:text-white w-6 h-6" />,
    title: "Frontend Development",
    items: ["JavaScript", "Typescript", "HTML / CSS"],
  },
  {
    id: 2,
    icon: <FaReact className="text-black dark:text-white w-6 h-6" />,
    title: "Frameworks & Tools",
    items: ["Spring Boot", "React / Next.js", "Angular", "WordPress", "Bootstrap", "Tailwind "],
  },
  {
    id: 3,
    icon: <FaDatabase className="text-black dark:text-white w-6 h-6" />,
    title: "Database & Data Analytics",
    items: ["SQL", "MongoDB", "New Relic"],
  },
  {
    id: 4,
    icon: <FaNodeJs className="text-black dark:text-white w-6 h-6" />,
    title: "Backend Development",
    items: ["Node.js", "Java", "Express.js", "RESTful API"],
  },
  {
    id: 5,
    icon: <FaGithub className="text-black dark:text-white w-6 h-6" />,
    title: "Version Control",
    items: ["Git / GitHub"],
  },
  {
    id: 6,
    icon: <FaServer className="text-black dark:text-white w-6 h-6" />,
    title: "Server Knowledge",
    items: ["Basic Server Administration (Linux)", "Nginx"],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="w-full py-24 overflow-hidden">
      <Separator />

      {/* Header Section */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="inline-block mb-4"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium shadow-lg">
            My Skills
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-6">
          Technical Skills
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          My technical expertise and professional capabilities
        </p>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              style={{
                transform: index % 2 === 0 ? "translateY(-20px)" : "translateY(20px)"
              }}
            >
              {/* Skill Card */}
              <motion.div
                className="relative p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all duration-500 group-hover:-translate-y-2 min-h-[320px]"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/20"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </div>

                {/* Skill Title */}
                <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.title}
                </h3>

                {/* Skills List */}
                <div className="relative z-10">
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.05 + 0.3,
                          type: "spring",
                          stiffness: 500
                        }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"
                          animate={{
                            boxShadow: "0 0 8px 2px rgba(99, 102, 241, 0.6)"
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
