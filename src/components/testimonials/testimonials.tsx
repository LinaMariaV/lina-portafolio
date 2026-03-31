import { motion } from "framer-motion";
import Separator from "../separator/separator";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Lina was a game-changer for our startup. Her attention to detail and ability to translate our vision into reality is unmatched. She delivered beyond our expectations.",
    author: "Luis Caicedo",
    role: "CEO",
    company: "Caicedo Lending"
  },
  {
    quote: "Lina delivered our project ahead of schedule while maintaining exceptional quality. Her technical expertise and communication skills made the entire process smooth and professional.",
    author: "Joseline Santiago",
    role: "Realtor",
    company: "Property Finders Realty"
  },
  {
    quote: "Professional, reliable, and incredibly talented. Lina understands both the technical and creative aspects of web development. Highly recommended for any serious project.",
    author: "Sergio Molina",
    role: "Software Engineer",
    company: "Tech Solutions Inc."
  }
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl pl-18 pr-16 py-20">
      <Separator />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
          What Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Real feedback from real clients who trusted me with their digital projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.author
            .split(" ")
            .map((n) => n[0])
            .join("");
          
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className="h-full p-7 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-800 flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-white dark:ring-gray-800">
                      {initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {testimonial.role}
                    </p>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-500 mt-0.5">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-indigo-600 to-purple-700"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
