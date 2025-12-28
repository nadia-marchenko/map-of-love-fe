import { Link, useLocation } from 'react-router-dom';
import { MapPin, Trophy, Heart } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-forest-800 text-cream-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
            <MapPin className="w-6 h-6" />
            <h1 className="text-xl font-bold">Map of Love</h1>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-smooth ${
                location.pathname === '/' || location.pathname === '/map-of-love-fe/'
                  ? 'bg-forest-700 text-gold-300'
                  : 'hover:bg-forest-700'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/map"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-smooth ${
                location.pathname === '/map'
                  ? 'bg-forest-700 text-gold-300'
                  : 'hover:bg-forest-700'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Map</span>
            </Link>
            <Link
              to="/challenges"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-smooth ${
                location.pathname === '/challenges'
                  ? 'bg-forest-700 text-gold-300'
                  : 'hover:bg-forest-700'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Challenges</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

