import { ProjectCard } from "@/utils/ProjectCard";
import Separator from "../separator/separator";
import Image from "next/image";
import Projectimage2 from "../../../public/project-2.png";
import Projectimage1 from "../../../public/project-1.jpg";
import Projectimage3 from "../../../public/project-3.png";

const projectsData = [
  {
    title: "Portafolio Web con React",
    description: "Creé este portafolio interactivo utilizando React y Next.js para mostrar mis proyectos y habilidades.",
    link: 
    "https://travel.linavillalba.me/",
    githubLink: "https://github.com/LinaMariaV/lina-portafolio",
    technologies: ["React", "Next.js", ],
    isExternalLink: true,
    image: Projectimage2,
  },
  {
    title: "Proyecto Viajes",
    description: " Proyecto de página web para agencia de viajes",
    link: "https://linavillalba.me",  
    githubLink: "https://github.com/LinaMariaV/travel-project",
    technologies: [ "React", "Bootstrap", "Node.js"],
    isExternalLink: true,
    image: Projectimage1,
  },
  {
    title: "Página Web para Fundación",
    description: "Colaboré en el desarrollo de una página web para una fundación",
    link: "https://funmedialma.com/",
    githubLink: "https://github.com/LinaMariaV/fundacion-project",
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3"],
    isExternalLink: true,
    image: Projectimage3,
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-6xl mt-16 px-16 py-8">
      <Separator />
      <h2 className="text-3xl font-semibold text-orange-50 mb-16 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-32">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center relative justify-between gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-2/4 mb-8 ">
              <div className="w-full md:w-2/3 mx-auto">
                <ProjectCard {...project} />
              </div>
            </div>

            <div
              className="relative w-full md:w-2/4"
              style={{ height: "300px" }}
            >
              <div className="absolute inset-0 flex flex-col justify-between bg-[#2d2d2d] rounded-lg shadow-lg overflow-hidden">
                <div className="h-4 bg-[#f0f0f0] rounded-t-lg flex items-center px-2 gap-1 relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-16 h-3 bg-gray-300 rounded-t-sm ml-2 top-[1px] relative text-[7px] pl-1 text-gray-500">
                    <div className="relative top-[1px] truncate w-full pr-2">
                      {project.title}
                    </div>
                    <div className="absolute right-[5px] top-0 text-[8px] text-gray-700">
                      x
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-full opacity-85 ">
                  <div
                    className="group relative w-full h-full 
                before:absolute before:inset-0 
                before:bg-indigo-500/10 before:rounded-b-lg
                before:transform before:transition-all before:duration-300
                hover:before:bg-indigo-500/0
                overflow-hidden"
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`Imagen del proyecto ${project.title}`}
                        className="rounded-b-lg object-cover border-2
                      transition-transform duration-500 ease-in-out
                      group-hover:scale-105
                      shadow-xl"
                        layout="fill"
                        priority={index === 0}
                      />
                    )}

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  rounded-b-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
