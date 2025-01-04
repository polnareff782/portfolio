'use client';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const projects = [
    {
      title: 'Chez Valérie - Vide-greniers permanent',
      description: 'Un site dynamique avec vente en ligne de produits d\'occasion pour un magasin de seconde main.',
      image: '/images/project1.jpg', // Remplace par le chemin de ton image
      languages: ['TypeScript', 'Next.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      image: '/images/project2.jpg', // Remplace par le chemin de ton image
      languages: ['React', 'Node.js', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projets
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.languages.map((language, i) => (
                      <span key={i} className="bg-gray-800 text-white px-4 py-2 rounded-lg">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}