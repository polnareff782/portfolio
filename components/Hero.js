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

      <div className="container mx-auto flex items-center justify-between px-8 relative z-10">
        {/* Texte à gauche */}
        <motion.div
          className="text-left max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Je suis <span className="text-yellow-300">Polnareff</span>
          </h1>
          <p className="text-xl mb-8">
            Création de solutions élégantes pour les problèmes complexes, une ligne de code à la fois.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Voir les projets
            </a>
            <a
              href="/cv.pdf" // Remplace par le lien vers ton CV
              download
              className="bg-transparent border-2 border-yellow-300 text-yellow-300 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-gray-900 transition duration-300"
            >
              Télécharger mon CV
            </a>
          </div>
        </motion.div>

        {/* Photo à droite (optionnelle) */}
        <motion.div
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/pictures/popol.gif" // Remplace par le chemin de ta photo
            alt="Votre photo"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}