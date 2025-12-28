import { useEffect, useState } from 'react';
import { getStats } from '../utils/storage';

const Footer = () => {
  const [stats, setStats] = useState({ visitedParks: 0, totalParks: 0, completedChallenges: 0, totalChallenges: 0 });

  useEffect(() => {
    const updateStats = () => {
      setStats(getStats());
    };
    
    updateStats();
    // Update stats when storage changes
    window.addEventListener('storage', updateStats);
    // Also listen to custom events for same-tab updates
    window.addEventListener('statsUpdated', updateStats);
    
    return () => {
      window.removeEventListener('storage', updateStats);
      window.removeEventListener('statsUpdated', updateStats);
    };
  }, []);

  return (
    <footer className="bg-forest-900 text-cream-100 py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center space-x-1">
            <span className="font-semibold">{stats.visitedParks}</span>
            <span>of</span>
            <span className="font-semibold">{stats.totalParks}</span>
            <span>parks visited</span>
          </span>
          <span className="text-forest-400">|</span>
          <span className="flex items-center space-x-1">
            <span className="font-semibold">{stats.completedChallenges}</span>
            <span>of</span>
            <span className="font-semibold">{stats.totalChallenges}</span>
            <span>challenges completed</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

