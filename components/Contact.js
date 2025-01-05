// app/contact/page.js
'use client';
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaLinkedin, FaCode, FaGamepad, FaRunning } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Fond flou */}
      <div className="absolute inset-0 bg-[url('/images/background-blur.jpg')] bg-cover bg-center blur-sm opacity-20 z-0"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Titre */}
        <motion.h2
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          À propos de moi
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          
          <IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
<IconButton aria-label="fingerprint" color="success">
  <Fingerprint />
</IconButton>
Si vous n’êtes pas familier avec le terminal, vous pouvez utiliser le bouton ci-dessus pour obtenir une version carte bento.
        </motion.p>

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne de gauche */}
          <div>
            {/* Informations personnelles */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4">Joris Benmehal</h3>
              <p className="text-lg mb-4">Développeur Full-stack | 24 ans | France</p>
            </motion.div>

            {/* À propos de moi */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold mb-4">À propos de moi</h4>
              <p className="text-lg">
                Je suis un développeur full-stack autodidacte passionné par la création et l’apprentissage. Mon parcours a commencé fin 2022, et depuis, j’explore les possibilités infinies du développement web. Je suis toujours enthousiaste à l’idée de relever de nouveaux défis et de repousser les limites du possible sur le web.
              </p>
            </motion.div>

            {/* Expérience */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold mb-4">Expérience</h4>
              <p className="text-lg">
                J’ai 2 ans d’expérience en tant que développeur web, travaillant avec l’écosystème React et Typescript. Je travaille actuellement comme développeur freelance pour ma propre entreprise, et je recherche un emploi à temps plein en tant que développeur web.
              </p>
            </motion.div>
          </div>

          {/* Colonne de droite */}
          <div>
            {/* Compétences */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold mb-4">Compétences</h4>
              <p className="text-lg mb-4">
                Je ne suis pas le meilleur, ni le plus qualifié, je n’ai pas de master mais j’apprends vite et je suis déterminé. Je cherche toujours à améliorer mes compétences. Jusqu’à présent, j’ai travaillé avec :
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'JavaScript', 'Typescript', 'Node.js', 'Express', 'MongoDB',
                  'React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Strapi',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    data-tooltip-id="skill-tooltip"
                    data-tooltip-content={skill}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              <Tooltip id="skill-tooltip" />
            </motion.div>

            {/* Contact */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold mb-4">Contact</h4>
              <ul className="text-lg space-y-4">
                <li className="flex items-center space-x-4">
                  <FaEnvelope className="text-yellow-300 text-2xl" />
                  <span>benmehal.joris@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaTwitter className="text-yellow-300 text-2xl" />
                  <span>@notRelash</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaLinkedin className="text-yellow-300 text-2xl" />
                  <span>in/joris-benmehal</span>
                </li>
              </ul>
            </motion.div>

            {/* Anecdotes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold mb-4">Anecdotes</h4>
              <ul className="text-lg space-y-4">
                <li className="flex items-center space-x-4">
                  <FaCode className="text-yellow-300 text-2xl" />
                  <span>J’ai écrit ma première ligne de code à 14 ans sur notepad++</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaGamepad className="text-yellow-300 text-2xl" />
                  <span>Joueur passionné avec plus de 1600 heures sur Red Dead Redemption 2</span>
                </li>
                <li className="flex items-center space-x-4">
                  <FaRunning className="text-yellow-300 text-2xl" />
                  <span>Je cours 5 jours sur 7</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}