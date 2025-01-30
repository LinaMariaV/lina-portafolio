interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  isExternalLink?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
  isExternalLink,
}) => (
  <div className="bg-slate-950 border-2  border-indigo-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    
      <div className="w-8 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8 stroke-cyan-500"
          fill="currentColor"
        >
          <path d="m403.717 427.398h-295.434c-33.084 0-60-26.916-60-60v-243.222c0-21.821 17.753-39.574 39.574-39.574h119.483c21.821 0 39.574 17.753 39.574 39.574 0 10.793 8.781 19.575 19.575 19.575h137.228c33.084 0 60 26.916 60 60v163.648c0 33.083-26.916 59.999-60 59.999zm-315.86-322.796c-10.793 0-19.574 8.781-19.574 19.574v243.223c0 22.056 17.944 40 40 40h295.434c22.056 0 40-17.944 40-40v-163.649c0-22.056-17.944-40-40-40h-137.228c-21.822 0-39.575-17.753-39.575-39.575 0-10.793-8.781-19.574-19.574-19.574h-119.483z" />
        </svg>
      </div>
      
   

    <h3 className="text-xl font-semibold text-orange-50">{title}</h3>
    <p className="text-sm mt-2 text-orange-50">{description}</p>

    {technologies && (
      <div className="flex space-x-4 mt-2 justify-center">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="text-sm font-semibold text-orange-50  py-1 px-4 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 transform hover:scale-105"
          >
            {tech}
          </div>
        ))}
      </div>
    )}
<div className="flex justify-center">
    <a
      className=" text-center text-orange-300  hover:underline mt-4 inline-block"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isExternalLink ? "Visitar el sitio web" : "Ver código en GitHub"}
    </a>
    </div>
  </div>
);
