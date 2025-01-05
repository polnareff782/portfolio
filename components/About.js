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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Mockup de téléphone avec vidéo */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative mx-auto border-gray-800/30 bg-gray-900/20 backdrop-blur-xl border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-[0_0_15px_rgba(0,0,0,0.5)] before:content-[''] before:absolute before:-inset-1 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:rounded-[2.5rem] before:z-[-1]">
              {/* Boutons latéraux avec effet glassmorphism */}
              <div className="h-[32px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[72px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[46px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[124px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[46px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[178px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[32px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -right-[17px] top-[142px] rounded-r-lg backdrop-blur-sm"></div>
              
              {/* Encoche supérieure */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-3xl"></div>
              
              {/* Écran avec effet de verre */}
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl relative">
                {/* Reflet sur l'écran */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                
                <video 
                  className="w-full h-full object-cover opacity-90"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/images/fallback-image.jpg"
                >
                  <source src="/pictures/luffy.mp4" type="video/mp4" />
                  <img src="/images/fallback-image.jpg" alt="Fallback image" />
                </video>
              </div>
            </div>
          </motion.div>

          {/* Grille de compétences */}
          <div className="w-full lg:w-2/3">
            <motion.p
              className="text-lg mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Développeur passionné par la création de sites web modernes et performants. Voici quelques-unes de mes compétences :
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillsList], index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-xl border border-white/10 p-6 shadow-lg rounded-xl text-gray-800 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
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
        </div>
      </div>
    </section>
  );
}