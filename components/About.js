'use client';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

export default function About() {
  const skills = {
    Langages: [
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
      { name: 'TypeScript', icon: <FaJsSquare className="text-blue-500 text-4xl" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-red-600 text-4xl" /> },
    ],
    'Front-End': [
      { name: 'React', icon: <FaReact className="text-blue-500 text-4xl" /> },
      { name: 'Next.js', icon: <FaReact className="text-black text-4xl" /> },
      { name: 'Vue.js', icon: <FaReact className="text-green-500 text-4xl" /> },
    ],
    'Back-End': [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: 'Express.js', icon: <FaNodeJs className="text-gray-800 text-4xl" /> },
      { name: 'MongoDB', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    ],
    'CSS & UI': [
      { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: 'Sass', icon: <FaCss3Alt className="text-pink-500 text-4xl" /> },
      { name: 'Adobe XD', icon: <FaCss3Alt className="text-purple-500 text-4xl" /> },
    ],
    'Outils & Plateformes': [
      { name: 'Git', icon: <FaGithub className="text-gray-800 text-4xl" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-4xl" /> },
      { name: 'Vercel', icon: <FaGithub className="text-black text-4xl" /> },
    ],
    Autres: [
      { name: 'Jest', icon: <FaJsSquare className="text-red-500 text-4xl" /> },
      { name: 'Vitest', icon: <FaJsSquare className="text-green-500 text-4xl" /> },
      { name: 'Redux', icon: <FaReact className="text-purple-500 text-4xl" /> },
    ],
  };

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          À Propos
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Développeur passionné par la création de sites web modernes et performants. Voici quelques-unes de mes compétences :
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 shadow-lg rounded-xl text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{category}</h3>
              <div className="space-y-4">
                {skillsList.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    {skill.icon}
                    <span className="text-lg text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}