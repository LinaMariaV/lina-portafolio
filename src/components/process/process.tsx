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
    description: "Understanding your goals, requirements, and vision for the project",
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
    <div
      id="process"
      className="w-full max-w-6xl pl-18 pr-16 py-20"
    >
      <Separator />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          My Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A structured approach to delivering exceptional digital experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center font-bold text-white text-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: "easeOut"
              }}
            >
              {step.number}
            </motion.div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>

            {/* Animated connector line */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden lg:block absolute left-1/2 -bottom-3 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <svg className="w-full h-6">
                  <path
                    d="M0 10 L50 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-gray-300 dark:text-gray-600"
                  />
                  <circle
                    cx="50"
                    cy="10"
                    r="4"
                    className="fill-gray-300 dark:fill-gray-600"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Center connector for mobile */}
      <div className="lg:hidden mt-12">
        <motion.div
          className="flex justify-center items-center gap-2 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 300
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
