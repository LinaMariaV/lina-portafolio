import { FaReact, FaNodeJs, FaHtml5, FaGithub, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Animaciones

export default function Skills() {
  return (
    <div className="w-full max-w-6xl px-16 py-20 font-[family-name:var(--font-inter)]">
      <h2 className="text-3xl font-semibold text-white mb-8">Habilidades Técnicas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Lenguajes de Programación */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaHtml5 className="text-orange-50 w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5">
            <li>JavaScript</li>
            <li>HTML / CSS</li>
            <li>SQL (Básico)</li>
          </ul>
        </motion.div>

        {/* Frameworks y Herramientas */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaReact className="text-orange-50 w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Frameworks y Herramientas</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5">
            <li>React / Next.js</li>
            <li>Git / GitHub</li>
            <li>Bootstrap</li>
          </ul>
        </motion.div>

        {/* Base de Datos */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaDatabase className="text-orange-50 w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Base de Datos</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5">
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaNodeJs className="text-orange-50 w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Backend Development</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>API Restful</li>
          </ul>
        </motion.div>

        {/* Control de Versiones */}
        <motion.div
          className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaGithub className="text-orange-50 w-8 h-8" />
            <h3 className="text-xl font-semibold text-white">Control de Versiones</h3>
          </div>
          <ul className="text-gray-300 list-disc pl-5">
            <li>Git / GitHub</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
