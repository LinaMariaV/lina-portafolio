
import { ProjectCard } from "@/utils/ProjectCard";
import Separator from "../separator/separator";

const projectsData = [
  {
    title: "Portafolio Web con React",
    description: "Creé este portafolio interactivo utilizando React y Next.js para mostrar mis proyectos y habilidades.",
    link: "https://github.com/mi-repo-nextjs",
    technologies: ["React", "Next.js"]
  },
  {
    title: "Página Web Personal",
    description: "Desarrollo de una página web personal usando solo HTML, CSS y JavaScript para practicar mis habilidades básicas de desarrollo web.",
    link: "https://github.com/mi-repo-web",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Página Web para Fundacion ",
    description: " Colaboré en el desarrollo de una página web para una fundación",
    link: "https://www.sitio-web-de-la-fundacion.com",
    isExternalLink: true
  }
];

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-6xl mt-16 px-16 py-8">
      <Separator />
      <h2 className="text-3xl font-semibold text-orange-50 mb-4 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}