interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  isExternalLink?: boolean;
  githubLink?: string; // Añadimos el link a GitHub
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
  isExternalLink,
  githubLink,
}) => (
  <div className="bg-gradient-to-t from-slate-800 via-slate-900 to-slate-950 border-2 text-indigo-500 border-indigo-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
    <div className="w-8 h-8 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-8 h-8 stroke-cyan-500"
        fill="currentColor"
      >
        <path d="m403.717 427.398h-295.434c-33.084 0-60-26.916-60-60v-243.222c0-21.821 17.753-39.574 39.574-39.574h119.483c21.821 0 39.574 17.753 39.574 39.574 0 10.793 8.781 19.575 19.575 19.575h137.228c33.084 0 60 26.916 60 60v163.648c0 33.083-26.916 59.999-60 59.999zm-315.86-322.796c-10.793 0-19.574 8.781-19.574 19.574v243.223c0 22.056 17.944 40 40 40h295.434c22.056 0 40-17.944 40-40v-163.649c0-22.056-17.944-40-40-40h-137.228c-21.822 0-39.575-17.753-39.575-39.575 0-10.793-8.781-19.574-19.574-19.574h-119.483z" />
      </svg>
    </div>

    <h3 className="text-xl font-semibold text-orange-50 mb-2">{title}</h3>
    <p className="text-sm mt-2 text-orange-50">{description}</p>

    {technologies && (
      <div className="flex flex-wrap justify-start gap-4 mt-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="text-sm font-semibold text-orange-50 py-2 px-4 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            {tech}
          </div>
        ))}
      </div>
    )}
    
    <div className="flex items-center justify-start gap-6 mt-4">
      {isExternalLink && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-300 hover:text-orange-400 transition-colors"
          title="Ir al sitio web"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-8 h-8"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>
          </svg>
        </a>
      )}
      
      <a
        href={githubLink || link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-300 hover:text-orange-400 transition-colors"
        title="Ver código en GitHub"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8"
        >
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      </a>
    </div>
  </div>
);
