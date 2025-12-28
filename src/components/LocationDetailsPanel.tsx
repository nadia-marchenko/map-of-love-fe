import { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, Info, Phone, Globe, Building, Train, Map, Shield, Award, Ticket, Mountain, Activity } from 'lucide-react';
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
          <span>Координаты: {location.coordinates[1].toFixed(4)}, {location.coordinates[0].toFixed(4)}</span>
        </div>

        {location.details && (
          <div className="space-y-4 pt-2 border-t border-earth-200">
            {/* Основная информация */}
            <div className="space-y-2">
              {location.details.location && (
                <div className="flex items-start space-x-2 text-sm">
                  <Map className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Расположение: </span>
                    <span className="text-earth-600">{location.details.location}</span>
                  </div>
                </div>
              )}
              {location.details.establishmentDate && (
                <div className="flex items-start space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Дата создания: </span>
                    <span className="text-earth-600">{location.details.establishmentDate}</span>
                  </div>
                </div>
              )}
              {location.details.area && (
                <div className="flex items-start space-x-2 text-sm">
                  <Info className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Площадь: </span>
                    <span className="text-earth-600">
                      парк - {location.details.area.park}
                      {location.details.area.bufferZone && `, охранная зона - ${location.details.area.bufferZone}`}
                    </span>
                  </div>
                </div>
              )}
              {location.details.protection && (
                <div className="flex items-start space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Охрана: </span>
                    <span className="text-earth-600">
                      {location.details.protection.strict && `строгая - ${location.details.protection.strict}`}
                      {location.details.protection.strict && location.details.protection.active && ', '}
                      {location.details.protection.active && `активная - ${location.details.protection.active}`}
                      {location.details.protection.active && location.details.protection.landscape && ', '}
                      {location.details.protection.landscape && `ландшафтная - ${location.details.protection.landscape}`}
                    </span>
                  </div>
                </div>
              )}
              {location.details.protectionPrograms && location.details.protectionPrograms.length > 0 && (
                <div className="flex items-start space-x-2 text-sm">
                  <Award className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Программы охраны: </span>
                    <span className="text-earth-600">{location.details.protectionPrograms.join(', ')}</span>
                  </div>
                </div>
              )}
              {location.details.symbol && (
                <div className="flex items-start space-x-2 text-sm">
                  <Info className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Символ: </span>
                    <span className="text-earth-600">{location.details.symbol}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Информация для посетителей */}
            <div className="pt-2 border-t border-earth-200 space-y-2">
              <h3 className="font-semibold text-earth-800 text-base mb-2">Информация для посетителей</h3>
              {location.details.tickets && (
                <div className="flex items-start space-x-2 text-sm">
                  <Ticket className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Билеты: </span>
                    <span className="text-earth-600">{location.details.tickets}</span>
                  </div>
                </div>
              )}
              {location.details.nearestCity && (
                <div className="flex items-start space-x-2 text-sm">
                  <Building className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Ближайший город: </span>
                    <span className="text-earth-600">{location.details.nearestCity}</span>
                  </div>
                </div>
              )}
              {location.details.nearestTrainStation && (
                <div className="flex items-start space-x-2 text-sm">
                  <Train className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Ближайшая ж/д станция: </span>
                    <span className="text-earth-600">{location.details.nearestTrainStation}</span>
                  </div>
                </div>
              )}
              {location.details.headquarters && (
                <div className="flex items-start space-x-2 text-sm">
                  <Building className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Штаб-квартира: </span>
                    <span className="text-earth-600">{location.details.headquarters}</span>
                  </div>
                </div>
              )}
              {location.details.phone && (
                <div className="flex items-start space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Телефон: </span>
                    <span className="text-earth-600">{location.details.phone}</span>
                  </div>
                </div>
              )}
              {location.details.website && (
                <div className="flex items-start space-x-2 text-sm">
                  <Globe className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Веб-сайт: </span>
                    <a href={`https://${location.details.website}`} target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:text-forest-700 underline">
                      {location.details.website}
                    </a>
                  </div>
                </div>
              )}
              {location.details.museums && location.details.museums.length > 0 && (
                <div className="flex items-start space-x-2 text-sm">
                  <Building className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-earth-700">Музеи: </span>
                    <span className="text-earth-600">{location.details.museums.join(', ')}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Активности */}
            {location.details.activities && (
              <div className="pt-2 border-t border-earth-200 space-y-2">
                <h3 className="font-semibold text-earth-800 text-base mb-2 flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Активности</span>
                </h3>
                <div className="space-y-1 text-sm">
                  {location.details.activities.hiking && (
                    <div className="text-earth-600">
                      <span className="font-medium text-earth-700">Пеший туризм: </span>
                      {location.details.activities.hiking}
                    </div>
                  )}
                  {location.details.activities.cycling && (
                    <div className="text-earth-600">
                      <span className="font-medium text-earth-700">Велосипедные маршруты: </span>
                      {location.details.activities.cycling}
                    </div>
                  )}
                  {location.details.activities.skiing && (
                    <div className="text-earth-600">
                      <span className="font-medium text-earth-700">Лыжи: </span>
                      {location.details.activities.skiing}
                    </div>
                  )}
                  {location.details.activities.educationalTrails && (
                    <div className="text-earth-600">
                      <span className="font-medium text-earth-700">Образовательные тропы: </span>
                      {location.details.activities.educationalTrails}
                    </div>
                  )}
                  {location.details.activities.other && location.details.activities.other.length > 0 && (
                    <div className="text-earth-600">
                      <span className="font-medium text-earth-700">Другое: </span>
                      {location.details.activities.other.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Рекомендации */}
            {location.details.visitRecommendations && (
              <div className="pt-2 border-t border-earth-200">
                <h3 className="font-semibold text-earth-800 text-base mb-2 flex items-center space-x-2">
                  <Mountain className="w-4 h-4" />
                  <span>На сколько приехать и где остановиться?</span>
                </h3>
                <p className="text-sm text-earth-600 leading-relaxed">{location.details.visitRecommendations}</p>
              </div>
            )}
          </div>
        )}

        {visitedLocation?.visited ? (
          <div className="bg-forest-50 border border-forest-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2 text-forest-700">
              <CheckCircle className="w-5 h-5 text-forest-600" />
              <span className="font-semibold">Посещено!</span>
            </div>
            {visitedLocation.visitDate && (
              <div className="flex items-center space-x-2 text-sm text-earth-600">
                <Calendar className="w-4 h-4" />
                <span>
                  Дата посещения: {new Date(visitedLocation.visitDate).toLocaleDateString('ru-RU')}
                </span>
              </div>
            )}
            {visitedLocation.notes && (
              <div className="mt-2 text-sm text-earth-700">
                <span className="font-medium">Заметки: </span>
                {visitedLocation.notes}
              </div>
            )}
            <button
              onClick={() => setShowForm(true)}
              className="mt-2 text-sm text-forest-600 hover:text-forest-700 underline"
            >
              Редактировать
            </button>
          </div>
        ) : (
          showForm && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-1">
                  Дата посещения
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
                  Заметки (необязательно)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-earth-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
                  placeholder="Добавьте свои воспоминания..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-forest-600 text-cream-50 py-2 px-4 rounded-lg hover:bg-forest-700 transition-smooth font-medium"
              >
                Отметить как посещённое
              </button>
            </form>
          )
        )}
      </div>
    </div>
  );
};

export default LocationDetailsPanel;

