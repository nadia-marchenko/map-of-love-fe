import { useState, useEffect } from 'react';
import { getChallenges, updateChallenge } from '../utils/storage';
import { ChallengesData } from '../types';
import ChallengeCard from '../components/ChallengeCard';
import { Filter, Trophy, Navigation, Leaf, Building, Utensils } from 'lucide-react';

type FilterType = 'all' | 'adventure' | 'navigation' | 'nature' | 'cultural' | 'local' | 'completed' | 'incomplete';

const ChallengesPage = () => {
  const [challenges, setChallenges] = useState<ChallengesData>({});
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loaded = getChallenges();
    setChallenges(loaded);
  }, []);

  const handleReveal = (challengeId: string) => {
    updateChallenge(challengeId, { revealed: true });
    const updated = getChallenges();
    setChallenges(updated);
  };

  const handleComplete = (challengeId: string, completed: boolean, notes?: string) => {
    updateChallenge(challengeId, {
      completed,
      completionDate: completed ? new Date().toISOString().split('T')[0] : undefined,
      notes,
    });
    const updated = getChallenges();
    setChallenges(updated);
    
    // Trigger stats update
    window.dispatchEvent(new Event('statsUpdated'));
  };

  const filteredChallenges = Object.entries(challenges).filter(([_id, challenge]) => {
    // Filter by category/completion
    if (filter === 'adventure' && challenge.category !== 'adventure') return false;
    if (filter === 'navigation' && challenge.category !== 'navigation') return false;
    if (filter === 'nature' && challenge.category !== 'nature') return false;
    if (filter === 'cultural' && challenge.category !== 'cultural') return false;
    if (filter === 'local' && challenge.category !== 'local') return false;
    if (filter === 'completed' && !challenge.completed) return false;
    if (filter === 'incomplete' && challenge.completed) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        challenge.title.toLowerCase().includes(query) ||
        challenge.location.toLowerCase().includes(query) ||
        challenge.description.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  const adventureChallenges = filteredChallenges.filter(([_, ch]) => ch.category === 'adventure');
  const navigationChallenges = filteredChallenges.filter(([_, ch]) => ch.category === 'navigation');
  const natureChallenges = filteredChallenges.filter(([_, ch]) => ch.category === 'nature');
  const culturalChallenges = filteredChallenges.filter(([_, ch]) => ch.category === 'cultural');
  const localChallenges = filteredChallenges.filter(([_, ch]) => ch.category === 'local');
  const completedCount = Object.values(challenges).filter(ch => ch.completed).length;
  const totalCount = Object.keys(challenges).length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-forest-800 mb-2">Challenges</h1>
        <p className="text-earth-600">
          Discover new places and experiences in Poland
        </p>
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <div className="bg-forest-100 px-4 py-2 rounded-lg">
            <span className="font-semibold text-forest-800">{completedCount}</span>
            <span className="text-earth-600"> of </span>
            <span className="font-semibold text-forest-800">{totalCount}</span>
            <span className="text-earth-600"> completed</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-smooth ${
              filter === 'all'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('adventure')}
            className={`px-4 py-2 rounded-lg transition-smooth flex items-center space-x-1 ${
              filter === 'adventure'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Adventure</span>
          </button>
          <button
            onClick={() => setFilter('navigation')}
            className={`px-4 py-2 rounded-lg transition-smooth flex items-center space-x-1 ${
              filter === 'navigation'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>Navigation</span>
          </button>
          <button
            onClick={() => setFilter('nature')}
            className={`px-4 py-2 rounded-lg transition-smooth flex items-center space-x-1 ${
              filter === 'nature'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Nature</span>
          </button>
          <button
            onClick={() => setFilter('cultural')}
            className={`px-4 py-2 rounded-lg transition-smooth flex items-center space-x-1 ${
              filter === 'cultural'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Cultural</span>
          </button>
          <button
            onClick={() => setFilter('local')}
            className={`px-4 py-2 rounded-lg transition-smooth flex items-center space-x-1 ${
              filter === 'local'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Local</span>
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg transition-smooth ${
              filter === 'completed'
                ? 'bg-gold-500 text-earth-900'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('incomplete')}
            className={`px-4 py-2 rounded-lg transition-smooth ${
              filter === 'incomplete'
                ? 'bg-forest-600 text-cream-50'
                : 'bg-cream-100 text-earth-700 hover:bg-cream-200'
            }`}
          >
            To Do
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search challenge..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 pl-10 rounded-lg border border-earth-300 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-forest-500"
          />
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-600 w-5 h-5" />
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="space-y-12">
        {/* Adventure Challenges */}
        {adventureChallenges.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Trophy className="w-6 h-6 text-forest-600" />
              <h2 className="text-2xl font-bold text-forest-800">Adventure Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adventureChallenges.map(([id, challenge]) => (
                <ChallengeCard
                  key={id}
                  challengeId={id}
                  challenge={challenge}
                  onReveal={handleReveal}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </section>
        )}

        {/* Navigation Challenges */}
        {navigationChallenges.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Navigation className="w-6 h-6 text-forest-600" />
              <h2 className="text-2xl font-bold text-forest-800">Navigation Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navigationChallenges.map(([id, challenge]) => (
                <ChallengeCard
                  key={id}
                  challengeId={id}
                  challenge={challenge}
                  onReveal={handleReveal}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </section>
        )}

        {/* Nature Challenges */}
        {natureChallenges.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-6 h-6 text-forest-600" />
              <h2 className="text-2xl font-bold text-forest-800">Nature Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {natureChallenges.map(([id, challenge]) => (
                <ChallengeCard
                  key={id}
                  challengeId={id}
                  challenge={challenge}
                  onReveal={handleReveal}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </section>
        )}

        {/* Cultural Challenges */}
        {culturalChallenges.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Building className="w-6 h-6 text-forest-600" />
              <h2 className="text-2xl font-bold text-forest-800">Cultural Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturalChallenges.map(([id, challenge]) => (
                <ChallengeCard
                  key={id}
                  challengeId={id}
                  challenge={challenge}
                  onReveal={handleReveal}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </section>
        )}

        {/* Local Challenges */}
        {localChallenges.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Utensils className="w-6 h-6 text-forest-600" />
              <h2 className="text-2xl font-bold text-forest-800">Local Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localChallenges.map(([id, challenge]) => (
                <ChallengeCard
                  key={id}
                  challengeId={id}
                  challenge={challenge}
                  onReveal={handleReveal}
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </section>
        )}

        {filteredChallenges.length === 0 && (
          <div className="text-center py-12 text-earth-600">
            <p>No challenges match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;

