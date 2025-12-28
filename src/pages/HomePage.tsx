import { Link } from 'react-router-dom';
import { MapPin, Trophy, Heart, Sparkles, Gift } from 'lucide-react';
import { parks } from '../data/parks';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-forest-50 to-cream-100">
      <div className="container mx-auto px-4 py-12">
        {/* Birthday Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <Sparkles className="w-16 h-16 text-gold-500 mx-auto animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-forest-800 mb-4">
            Happy 30th Birthday! 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-earth-700 mb-2">
            My Dearest Husband
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-600 mb-6">
            <Heart className="w-6 h-6 fill-current" />
            <span className="text-xl font-semibold">With all my love</span>
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="bg-cream-50 rounded-2xl shadow-lg p-8 mb-8 border border-earth-200">
            <h2 className="text-3xl font-bold text-forest-800 mb-4 text-center">
              Welcome to Your Adventure Map!
            </h2>
            <p className="text-lg text-earth-700 leading-relaxed text-center mb-6">
              As you celebrate this special milestone, I've created something special for you - 
              a journey through Poland's beautiful parks and exciting challenges. 
              This is your personal map to track adventures, discover new places, 
              and create wonderful memories together.
            </p>
            <p className="text-lg text-earth-700 leading-relaxed text-center">
              Every park you visit, every challenge you complete, is a step in our shared adventure. 
              Here's to 30 amazing years behind you and countless adventures ahead! 🗺️✨
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Map Card */}
            <Link
              to="/"
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-forest-500"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-forest-100 p-3 rounded-lg group-hover:bg-forest-200 transition-colors">
                  <MapPin className="w-8 h-8 text-forest-600" />
                </div>
                <h3 className="text-2xl font-bold text-forest-800">Interactive Map</h3>
              </div>
              <p className="text-earth-700 mb-4">
                Explore Poland's beautiful national parks and landscape parks. 
                Mark your visits, add memories, and watch your journey unfold on the map.
              </p>
              <div className="flex items-center text-forest-600 font-semibold group-hover:text-forest-700">
                <span>Explore the Map</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Challenges Card */}
            <Link
              to="/challenges"
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold-400"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gold-100 p-3 rounded-lg group-hover:bg-gold-200 transition-colors">
                  <Trophy className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-forest-800">Challenges</h3>
              </div>
              <p className="text-earth-700 mb-4">
                Discover exciting adventures and everyday escapes. 
                Scratch off challenges, complete them, and track your progress!
              </p>
              <div className="flex items-center text-forest-600 font-semibold group-hover:text-forest-700">
                <span>View Challenges</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>

          {/* Birthday Message */}
          <div className="bg-gradient-to-r from-forest-600 to-forest-700 rounded-2xl shadow-lg p-8 text-cream-50">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">A Special Gift for You</h3>
            </div>
            <p className="text-lg leading-relaxed text-center">
              On your 30th birthday, I wanted to give you something that grows with our adventures. 
              This map is a living memory book - every park you visit, every challenge you complete 
              becomes part of our story. May this year bring you incredible journeys, 
              beautiful discoveries, and endless joy. Here's to exploring Poland together, 
              one park at a time! 🎂🎁
            </p>
          </div>

          {/* Quick Stats Preview */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-cream-50 rounded-lg p-4 text-center border border-earth-200">
              <div className="text-3xl font-bold text-forest-700">{parks.length}</div>
              <div className="text-sm text-earth-600 mt-1">Parks to Explore</div>
            </div>
            <div className="bg-cream-50 rounded-lg p-4 text-center border border-earth-200">
              <div className="text-3xl font-bold text-forest-700">30</div>
              <div className="text-sm text-earth-600 mt-1">Challenges Await</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

