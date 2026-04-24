import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
//import { motion } from "framer-motion";
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
    <div id="skills" className="w-full max-w-6xl pl-18 pr-16 py-20">
      <div className="text-center mb-12">
        <Separator />
        <h2 className="text-4xl font-bold text-black dark:text-white mt-4">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map(({ id, icon, title, items }) => (
          <div
            key={id}
            className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              {icon}
              <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}