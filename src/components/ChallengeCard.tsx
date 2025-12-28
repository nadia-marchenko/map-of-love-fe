import { useState, useRef, useEffect } from 'react';
import { ChallengeState } from '../types';
import { MapPin, CheckCircle, Calendar, Sparkles, Clock, Lightbulb } from 'lucide-react';

interface ChallengeCardProps {
  challengeId: string;
  challenge: ChallengeState;
  onReveal: (challengeId: string) => void;
  onComplete: (challengeId: string, completed: boolean, notes?: string) => void;
}

const ChallengeCard = ({ challengeId, challenge, onReveal, onComplete }: ChallengeCardProps) => {
  const [isScratching, setIsScratching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(challenge.notes || '');
  const [showCelebration, setShowCelebration] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (challenge.completed && !showCelebration) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    }
  }, [challenge.completed, showCelebration]);

  // Initialize scratch-off canvas
  useEffect(() => {
    if (!challenge.revealed && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Fill with gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#78716c');
      gradient.addColorStop(1, '#57534e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add text overlay
      ctx.fillStyle = '#fafaf9';
      ctx.font = 'bold 24px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch!', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '16px Montserrat, sans-serif';
      ctx.fillText('Move your mouse', canvas.width / 2, canvas.height / 2 + 20);
    }
  }, [challenge.revealed]);

  const handleReveal = () => {
    onReveal(challengeId);
  };

  const handleScratchStart = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (challenge.revealed) return;
    setIsScratching(true);
    scratch(e);
  };

  const handleScratchMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isScratching || challenge.revealed) return;
    scratch(e);
  };

  const handleScratchEnd = () => {
    setIsScratching(false);
  };

  const scratch = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratch progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }
    const progress = (transparentPixels / (pixels.length / 4)) * 100;
    
    // Auto-reveal if enough scratched
    if (progress > 30 && !challenge.revealed) {
      onReveal(challengeId);
    }
  };

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    const completed = e.target.checked;
    onComplete(challengeId, completed, notes);
  };

  const handleSaveNotes = () => {
    onComplete(challengeId, challenge.completed, notes);
    setShowNotes(false);
  };

  return (
    <div className={`relative bg-cream-50 rounded-lg card-shadow-lg overflow-hidden transition-smooth ${
      challenge.completed ? 'ring-2 ring-gold-400' : ''
    }`}>
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-bounce">
            <Sparkles className="w-16 h-16 text-gold-500" />
          </div>
        </div>
      )}

      {/* Scratch-off overlay */}
      {!challenge.revealed && (
        <div className="absolute inset-0 z-10 rounded-lg overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair"
            onMouseDown={handleScratchStart}
            onMouseMove={handleScratchMove}
            onMouseUp={handleScratchEnd}
            onMouseLeave={handleScratchEnd}
            style={{ touchAction: 'none' }}
          />
        </div>
      )}

      {/* Time Chip with Tooltip - positioned on scratch area */}
      {!challenge.revealed && challenge.time && (
        <div 
          className="absolute top-4 right-4 z-20"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="relative">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-forest-600 text-cream-50 rounded-full shadow-lg cursor-pointer hover:bg-forest-700 transition-colors">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{challenge.time}</span>
            </div>
            
            {/* Tooltip */}
            {showTooltip && challenge.tips && (
              <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-forest-800 text-cream-50 rounded-lg shadow-xl z-30">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{challenge.tips}</p>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-forest-800 transform rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className={`${!challenge.revealed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {challenge.image && (
          <div className="w-full h-48 rounded-t-lg overflow-hidden bg-earth-200">
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/800/600?random=${challengeId.charCodeAt(challengeId.length - 1)}`;
              }}
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-forest-800 mb-2">{challenge.title}</h3>
            <div className="flex items-center space-x-2 text-sm text-earth-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{challenge.location}</span>
            </div>
            <div className="text-sm text-earth-600 mb-3">
              {challenge.distanceFromGdansk} km from Gdańsk
            </div>
            {challenge.time && (
              <div className="flex items-center space-x-2 text-sm text-forest-600 mb-2">
                <Clock className="w-4 h-4" />
                <span>{challenge.time}</span>
              </div>
            )}
            {challenge.tips && (
              <div className="flex items-start space-x-2 text-sm text-forest-700 mb-2 p-2 bg-forest-50 rounded-lg">
                <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{challenge.tips}</span>
              </div>
            )}
          </div>
          {challenge.completed && (
            <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
          )}
        </div>

        <p className="text-earth-700 mb-4 leading-relaxed">{challenge.description}</p>

        {challenge.completed && challenge.completionDate && (
          <div className="flex items-center space-x-2 text-sm text-forest-600 mb-4">
            <Calendar className="w-4 h-4" />
            <span>
              Completed: {new Date(challenge.completionDate).toLocaleDateString('en-US')}
            </span>
          </div>
        )}

        {challenge.notes && !showNotes && (
          <div className="mb-4 p-3 bg-forest-50 rounded-lg">
            <p className="text-sm text-earth-700">
              <span className="font-medium">Notes: </span>
              {challenge.notes}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={challenge.completed}
              onChange={handleComplete}
              className="w-5 h-5 text-forest-600 rounded focus:ring-forest-500"
            />
            <span className="text-sm font-medium text-earth-700">
              {challenge.completed ? 'Completed' : 'Mark as completed'}
            </span>
          </label>

          {!showNotes ? (
            <button
              onClick={() => setShowNotes(true)}
              className="text-sm text-forest-600 hover:text-forest-700 underline"
            >
              {challenge.notes ? 'Edit notes' : 'Add notes'}
            </button>
          ) : (
            <div className="space-y-2">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your memories..."
                rows={3}
                className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-sm"
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleSaveNotes}
                  className="px-3 py-1 bg-forest-600 text-cream-50 rounded-lg text-sm hover:bg-forest-700 transition-smooth"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowNotes(false);
                    setNotes(challenge.notes || '');
                  }}
                  className="px-3 py-1 bg-cream-200 text-earth-700 rounded-lg text-sm hover:bg-cream-300 transition-smooth"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>

      {/* Reveal Button (fallback) */}
      {!challenge.revealed && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={handleReveal}
            className="px-4 py-2 bg-gold-500 text-earth-900 rounded-lg font-medium hover:bg-gold-600 transition-smooth shadow-lg"
          >
            Reveal Challenge
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;

