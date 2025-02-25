import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import Separator from "../separator/separator";



const skillsData = [
  {
    id: 1,
    icon: <FaHtml5 className="text-orange-50 w-8 h-8" />,
    title: "Frontend Development",
    items: ["JavaScript", "HTML / CSS", "SQL (Básico)"],
    
  },
  {
    id: 2,
    icon: <FaReact className="text-orange-50 w-8 h-8" />,
    title: "Frameworks y Herramientas",
    items: ["React / Next.js", "Angular", "Bootstrap"],
    
  },
  {
    id: 3,
    icon: <FaDatabase className="text-orange-50 w-8 h-8" />,
    title: "Base de Datos",
    items: ["SQL", "MongoDB"],
    
  },
  {
    id: 4,
    icon: <FaNodeJs className="text-orange-50 w-8 h-8" />,
    title: "Backend Development",
    items: ["Node.js", "Express.js", "API Restful"],
    
  },
  {
    id: 5,
    icon: <FaGithub className="text-orange-50 w-8 h-8" />,
    title: "Control de Versiones",
    items: ["Git / GitHub"],
    
  },
  {
    id: 6,
    icon: <FaServer className="text-orange-50 w-8 h-8" />, 
    title: "Conocimientos en Servidores",
    items: ["Administración básica de servidores (Linux)", "Nginx", ],
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full max-w-6xl  px-16 py-20 font-[family-name:var(--font-inter)]"
    >
      <Separator />
      <h2 className="text-3xl font-semibold text-white mb-8">
        Habilidades Técnicas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillsData.map(({ id, icon, title, items }) => (
          <div 
            key={id}
            className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {icon}
              <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <ul className="text-gray-300 list-disc pl-5">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
