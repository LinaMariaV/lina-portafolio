import Link from "next/link";

export default function TraditionalFooter() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-900 mt-20 py-12 pl-18 pr-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Sobre mí */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Sobre mí
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Freelance developer especializada en crear soluciones digitales escalables y centradas en el usuario.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/LinaMariaV"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lina-maria-villalba/"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.636c0-3.375-2-3.744-2-3.744-1.25-.344-1.75-1.795-1.75-1.795-1.75-.36-2.5-2.998-2.5-2.998-2.5-.164-5-1.67-5-4.25 0-3.02 2.46-5 5-5h3.5c2.5 0 4.5 1.98 4.5 4.5v8.75c0 2.5-2 4.5-4.5 4.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Desarrollo Frontend</a></li>
              <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Desarrollo Backend</a></li>
              <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Despliegue y DevOps</a></li>
              <li><a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Consultoría Técnica</a></li>
              <li><a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">APIs y Microservicios</a></li>
            </ul>
          </div>

          {/* Columna 3: Tecnologías */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {"React,Next.js,Node.js,TypeScript,Spring Boot,Nginx,Docker,Git".split(",").map(tech => (
                <span
                  key={tech.trim()}
                  className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:linavilla1499@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  linavilla1499@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linavillalba.me"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  linavillalba.me
                </a>
              </li>
              <li>
                <a
                  href="https://caicedolending.com/"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  caicedolending.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-medium text-black dark:text-white mb-3">
                Horario
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lunes - Viernes<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Lina Villalba. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Términos de servicio
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Política de cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}