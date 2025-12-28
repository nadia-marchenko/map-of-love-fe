import { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Location, VisitedLocation } from '../types';

interface LocationDetailsPanelProps {
  location: Location;
  visitedLocation?: VisitedLocation;
  onMarkAsVisited: (locationId: string, visitDate: string, notes?: string) => void;
  onClose: () => void;
}

const LocationDetailsPanel = ({
  location,
  visitedLocation,
  onMarkAsVisited,
  onClose,
}: LocationDetailsPanelProps) => {
  const [visitDate, setVisitDate] = useState(
    visitedLocation?.visitDate || new Date().toISOString().split('T')[0]
  );
  const [notes, setNotes] = useState(visitedLocation?.notes || '');
  const [showForm, setShowForm] = useState(!visitedLocation?.visited);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onMarkAsVisited(location.id, visitDate, notes);
  };

  return (
    <div className="absolute top-4 right-4 z-[1000] w-full max-w-md max-h-[calc(100vh-180px)] bg-cream-50 rounded-lg shadow-2xl border border-earth-300 overflow-hidden animate-slide-in flex flex-col">
      <div className="bg-forest-700 text-cream-50 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <h2 className="text-xl font-bold">{location.name}</h2>
        <button
          onClick={onClose}
          className="hover:bg-forest-600 rounded-full p-1 transition-smooth"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto flex-1">
        {location.image && (
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-earth-200">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/800/600?random=${location.id.charCodeAt(0)}`;
              }}
            />
          </div>
        )}

        {location.category && (
          <div className="text-sm text-earth-600 uppercase tracking-wide">
            {location.category}
          </div>
        )}

        <p className="text-earth-700 leading-relaxed">{location.description}</p>

        <div className="flex items-center space-x-2 text-sm text-earth-600">
          <MapPin className="w-4 h-4" />
          <span>Coordinates: {location.coordinates[1].toFixed(4)}, {location.coordinates[0].toFixed(4)}</span>
        </div>

        {visitedLocation?.visited ? (
          <div className="bg-forest-50 border border-forest-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2 text-forest-700">
              <CheckCircle className="w-5 h-5 text-forest-600" />
              <span className="font-semibold">Visited!</span>
            </div>
            {visitedLocation.visitDate && (
              <div className="flex items-center space-x-2 text-sm text-earth-600">
                <Calendar className="w-4 h-4" />
                <span>
                  Visit date: {new Date(visitedLocation.visitDate).toLocaleDateString('en-US')}
                </span>
              </div>
            )}
            {visitedLocation.notes && (
              <div className="mt-2 text-sm text-earth-700">
                <span className="font-medium">Notes: </span>
                {visitedLocation.notes}
              </div>
            )}
            <button
              onClick={() => setShowForm(true)}
              className="mt-2 text-sm text-forest-600 hover:text-forest-700 underline"
            >
              Edit
            </button>
          </div>
        ) : (
          showForm && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1">
                  Visit date
                </label>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
                  placeholder="Add your memories..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-forest-600 text-cream-50 py-2 px-4 rounded-lg hover:bg-forest-700 transition-smooth font-medium"
              >
                Mark as visited
              </button>
            </form>
          )
        )}
      </div>
    </div>
  );
};

export default LocationDetailsPanel;

