// app/projects/page.js
'use client';
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: 'Chez Valérie - Vide-greniers permanent',
      description: 'Un site dynamique avec vente en ligne de produits d\'occasion pour un magasin de seconde main.',
      languages: ['TypeScript', 'Next.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Projet 2', 
      description: 'Description du projet 2.',
      languages: ['React', 'Node.js', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-transparent relative">
      {/* Fond flou */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-0"></div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projets
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Liste des projets à gauche */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.languages.map((language, i) => (
                      <span key={i} className="bg-gray-700/50 px-4 py-2 rounded-lg text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mockup de téléphone à droite */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative mx-auto border-gray-800/30 bg-gray-900/20 backdrop-blur-xl border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-[0_0_15px_rgba(0,0,0,0.5)] before:content-[''] before:absolute before:-inset-1 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:rounded-[2.5rem] before:z-[-1]">
              {/* Boutons latéraux */}
              <div className="h-[32px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[72px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[46px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[124px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[46px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -left-[17px] top-[178px] rounded-l-lg backdrop-blur-sm"></div>
              <div className="h-[32px] w-[3px] bg-gradient-to-b from-gray-600/80 to-gray-800/80 absolute -right-[17px] top-[142px] rounded-r-lg backdrop-blur-sm"></div>
              
              {/* Encoche */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-3xl"></div>
              
              {/* Écran */}
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                
                <video 
                  className="w-full h-full object-cover opacity-90"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/images/fallback-image.jpg"
                >
                  <source src="/pictures/projects-demo.mp4" type="video/mp4" />
                  <img src="/images/fallback-image.jpg" alt="Fallback" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}