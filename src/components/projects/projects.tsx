import { ProjectCard } from "@/utils/ProjectCard";
import Separator from "../separator/separator";
import Image from "next/image";
import Projectimage2 from "../../../public/project-2.png";

import Projectimage3 from "../../../public/project-3.png";
import Projectimage4 from "../../../public/project-port.png";
const projectsData = [
  {
    title: "Foundation Website",
    description:
      "I collaborated on developing a website for a foundation using Angular and TypeScript. This project aimed to provide information and resources to foundation beneficiaries, implementing a responsive and accessible design for all devices.",
    link: "https://funmedialma.com/",
    //githubLink: "https://github.com/LinaMariaV/fundacion-project",
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3"],
    isExternalLink: true,
    image: Projectimage3,
  },
  {
    title: "Mortgage Consultant Portfolio",
    description:
      "Portfolio for a mortgage client. Designed and developed with React and Next.js, featuring a modern and attractive design to attract new clients.",
    link: "https://caicedolending.com/",
    technologies: ["React", "Next.js"],
    isExternalLink: true,
    image: Projectimage4,
  },
  {
    title: "Travel Project",
    description:
      "As an educational project, I designed and developed a website for a travel agency using React, Bootstrap, and Node.js. The application allows users to explore different destinations and make ticket reservations online, providing an attractive and user-friendly interface.",
    link: "https://linavillalba.me",
    //githubLink: "https://github.com/LinaMariaV/travel-project",
    technologies: ["React", "Bootstrap", "Node.js"],
    isExternalLink: true,
    image: Projectimage2,
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-6xl mt-16 px-16 py-8">
      <Separator />
      <h2 className="text-3xl font-semibold text-orange-50 mb-16 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-40">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center relative justify-between gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-2/4 mb-8  ">
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
                        className=" border-2 rounded-b-lg object-cover 
                      transition-transform duration-500 ease-in-out
                      group-hover:scale-105
                      shadow-xl "
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
