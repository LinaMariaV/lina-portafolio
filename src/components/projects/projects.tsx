import { ProjectCard } from "@/utils/ProjectCard";
import Separator from "../separator/separator";
import Image from "next/image";
import Projectimage2 from "../../../public/project-2.png";

import Projectimage3 from "../../../public/project-3.png";
import Projectimage4 from "../../../public/project-port.png";
import Projectimage1 from "../../../public/project-1.png";

const projectsData = [
  {
    title: "Brandon Townes",
    description:
      "New home community in Greenville, SC. Modern townhomes with premium finishes, set along a private creekside in Greenville's most desirable neighborhood.",
    link: "https://brandontownesgvl.com/",
    technologies: ["React", "Next.js", "Framer Motion"],
    isExternalLink: true,
    image: Projectimage1,
  },
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
    <div id="projects" className="w-full max-w-6xl mt-16 pl-18 pr-16 py-8">
      <Separator />
      <h2 className="text-4xl font-bold text-black dark:text-white mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-20">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="w-full md:w-2/5">
              <ProjectCard {...project} />
            </div>

            <div
              className="relative w-full md:w-3/5"
              style={{ height: "350px" }}
            >
              <div className="absolute inset-0 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="group relative w-full h-full overflow-hidden"
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`Project ${project.title}`}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      fill
                      priority={index === 0}
                    />
                  )}

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
