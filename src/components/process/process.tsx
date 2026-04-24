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
    description:
      "Understanding your goals, requirements, and vision for the project",
  },
  {
    number: 2,
    title: "Planning",
    description: "Architecting scalable solutions with modern technologies",
  },
  {
    number: 3,
    title: "Development",
    description: "Building clean, maintainable code with best practices",
  },
  {
    number: 4,
    title: "Testing",
    description: "Ensuring quality, performance, and responsiveness",
  },
  {
    number: 5,
    title: "Launch",
    description: "Deploying to production with ongoing support",
  },
];

export default function Process() {
  return (
    <div id="process" className="w-full max-w-6xl pl-18 pr-16 py-20">
      <div className="text-center mb-16">
        <Separator />
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          Our Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collaborative approach to bringing your vision to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative p-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center font-bold text-white text-sm"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: "easeOut",
              }}
            >
              {step.number}
            </motion.div>

            <div className="relative z-10 pt-2">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile arrows */}
      <div className="md:hidden mt-2 flex justify-center">
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {steps.slice(0, -1).map((_, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3 }}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
