export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Votre Nom. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
            <a href="#" className="hover:text-gray-400">GitHub</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
          </div>
        </div>
      </footer>
    );
  }