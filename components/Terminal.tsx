'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaLinkedin, FaCode, FaGamepad, FaRunning } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


type CommandType = 'whoami' | 'about' | 'experience' | 'skills' | 'contact' | 'anecdotes' | 'help';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [showTerminal, setShowTerminal] = useState(true);  // State to toggle between terminal and contact page

  // Liste des commandes disponibles
  const commands: Record<CommandType, string> = {
    whoami: 'Affiche qui vous êtes.',
    about: 'Donne des informations à propos de moi.',
    experience: 'Affiche mes expériences.',
    skills: 'Affiche mes compétences.',
    contact: 'Affiche mes informations de contact.',
    anecdotes: 'Affiche quelques anecdotes.',
    help: 'Affiche cette liste de commandes.',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const command = input.trim().toLowerCase(); // Pas d'assertion de type ici

      let response = '';

      // Vérifie si la commande est valide
      if (command in commands) {
        // On peut maintenant utiliser command comme clé d'indexation
        response = handleCommand(command as CommandType);
      } else {
        response = `Commande inconnue : ${input}. Tapez 'help' pour voir la liste des commandes disponibles.`;
      }

      setOutput((prevOutput) => [...prevOutput, `$ ${input}`, response]);
      setInput('');
    }
  };

  // Fonction qui gère les commandes valides
  const handleCommand = (command: CommandType): string => {
    switch (command) {
      case 'whoami':
        return 'Vous êtes un utilisateur qui veut en savoir plus sur Joris Benmehal !';
      case 'about':
        return 'Je suis un développeur full-stack autodidacte passionné par la création et l’apprentissage. Mon parcours a commencé fin 2022, et je suis enthousiaste à l’idée de relever de nouveaux défis sur le web.';
      case 'experience':
        return 'J’ai 2 ans d’expérience en tant que développeur web, travaillant avec l’écosystème React et Typescript. Je suis actuellement développeur freelance, en quête d’un emploi à temps plein.';
      case 'skills':
        return 'J’ai travaillé avec les technologies suivantes : JavaScript, Typescript, Node.js, Express, MongoDB, React, Next.js, Vue.js, TailwindCSS, Strapi.';
      case 'contact':
        return 'Contactez-moi à benmehal.joris@gmail.com ou sur Twitter @notRelash ou LinkedIn in/joris-benmehal.';
      case 'anecdotes':
        return 'J’ai écrit ma première ligne de code à 14 ans, j’ai plus de 1600 heures sur Red Dead Redemption 2, et je cours 5 jours sur 7.';
      case 'help':
        return 'Liste des commandes disponibles :\n' +
          Object.keys(commands).map(command => `${command}: ${commands[command]}`).join('\n');
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-white">Vous préférez voir un terminal ou consulter les informations sur moi ?</p>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded" 
          onClick={() => setShowTerminal(!showTerminal)}>
          {showTerminal ? 'Voir Contact' : 'Voir Terminal'}
        </button>
      </div>

      {showTerminal ? (
        <div className="terminal" style={terminalStyle}>
          <div className="terminal-output" style={outputStyle}>
            {output.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} style={formStyle}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Entrez une commande"
              style={inputStyle}
            />
          </form>
        </div>
      ) : (
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

            {/* Grille principale */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-3xl font-bold mb-4">Joris Benmehal</h3>
                  <p className="text-lg mb-4">Développeur Full-stack | 24 ans | France</p>
                </motion.div>
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h4 className="text-2xl font-bold mb-4">À propos de moi</h4>
                  <p className="text-lg">
                    Je suis un développeur full-stack autodidacte passionné par la création et l’apprentissage. Mon parcours a commencé fin 2022...
                  </p>
                </motion.div>
                {/* ... Le reste du contenu du contact */}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// Styles pour le terminal
const terminalStyle = {
  backgroundColor: '#1a1a2e', // Bleu foncé
  color: '#4e9af1', // Bleu clair pour le texte
  fontFamily: 'monospace',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '800px',
  margin: '50px auto',
  boxShadow: '0 0 10px rgba(78, 154, 241, 0.5)',
};

const outputStyle: React.CSSProperties = {
  minHeight: '300px',
  maxHeight: '400px',
  overflowY: 'auto', // Valeur acceptée pour overflowY
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const inputStyle = {
  backgroundColor: '#333',
  color: '#4e9af1',
  border: '1px solid #4e9af1',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  width: '100%',
};

export default Terminal;
