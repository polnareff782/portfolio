export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 sticky top-0">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Mon Portfolio</h1>
          <div className="flex space-x-4">
            <a href="#hero" className="hover:text-gray-400">Accueil</a>
            <a href="#projects" className="hover:text-gray-400">Projets</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  