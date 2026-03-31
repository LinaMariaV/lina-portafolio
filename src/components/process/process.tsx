import React from "react";
import { motion } from "framer-motion";
import Separator from "../separator/separator";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description: "Understanding your goals, requirements, and vision for the project"
  },
  {
    number: 2,
    title: "Planning",
    description: "Architecting scalable solutions with modern technologies"
  },
  {
    number: 3,
    title: "Development",
    description: "Building clean, maintainable code with best practices"
  },
  {
    number: 4,
    title: "Testing",
    description: "Ensuring quality, performance, and responsiveness"
  },
  {
    number: 5,
    title: "Launch",
    description: "Deploying to production with ongoing support"
  }
];

export default function Process() {
  return (
    <div id="process" className="w-full py-24 overflow-hidden">
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
            How We Work
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-6">
          My Process
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A structured approach to delivering exceptional digital experiences
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

      {/* Flow Container */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Central flow line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
              {/* Step Card */}
              <motion.div
                className="relative p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all duration-500 group-hover:-translate-y-2"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 flex items-center justify-center font-bold text-2xl md:text-3xl text-white shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/20 z-20"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    delay: index * 0.1 + 0.2
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Connector line for odd items */}
                {index % 2 === 0 && index < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent origin-left"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 300
                    }}
                  />
                )}

                {/* Step Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
                      animate={{
                        boxShadow: "0 0 10px 2px rgba(99, 102, 241, 0.5)"
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop connector dots between columns */}
        <div className="hidden lg:flex justify-center items-center gap-4 md:gap-6 mt-8">
          {steps.slice(0, -1).map((_, index) => (
            <motion.div
              key={`connector-${index}`}
              className="relative flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15 + 0.5,
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/30 z-10 relative"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              {index < steps.length - 2 && (
                <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical connector */}
        <div className="md:hidden mt-12 flex justify-center">
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-500/50 to-transparent" />
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={`mobile-dot-${index}`}
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 500,
                  damping: 12
                }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/30 z-10 relative"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">Ready to start your project?</p>
        <motion.button
          className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 dark:shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 transform transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </motion.button>
      </motion.div>
    </div>
  );
}
