// app/hero/page.js
'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-transparent text-white relative"
    >
      {/* Fond flou (optionnel) */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-0"></div>

      <div className="container mx-auto flex items-center justify-between px-16 relative z-10 gap-20">
        {/* Contenu gauche */}
        <div className="w-1/2 space-y-12">
          {/* Photo en haut */}
          <motion.div
            className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src="/pictures/popol.gif"
              alt="Votre photo"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Texte en dessous */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-bold">
              Je suis <span className="text-yellow-300">Polnareff</span>
            </h1>
            <p className="text-xl">
              Création de solutions élégantes pour les problèmes complexes, une ligne de code à la fois.
            </p>
            <div className="flex space-x-6 justify-center">
              <a
                href="#projects"
                className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Voir les projets
              </a>
              <a
                href="/cv.pdf"
                download
                className="bg-transparent border-2 border-yellow-300 text-yellow-300 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image à droite avec effet verre */}
        <div className="w-1/2 flex justify-end">
          <motion.div
            className="relative w-[800px] h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="absolute inset-0 backdrop-blur-sm bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 rounded-2xl">
              <Image
                src="/pictures/code.jpg"
                alt="Description de l'image" 
                fill
                className="object-cover rounded-2xl opacity-80 mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}