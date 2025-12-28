export interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [longitude, latitude]
  category?: string;
  image?: string; // URL or path to image
  // Детальная информация о парке
  details?: {
    location?: string; // Расположение
    establishmentDate?: string; // Дата создания
    area?: {
      park?: string; // Площадь парка
      bufferZone?: string; // Площадь охранной зоны
    };
    protection?: {
      strict?: string; // Строгая охрана
      active?: string; // Активная охрана
      landscape?: string; // Ландшафтная охрана
    };
    protectionPrograms?: string[]; // Программы охраны
    symbol?: string; // Символ парка
    tickets?: string; // Информация о билетах
    nearestCity?: string; // Ближайший город
    nearestTrainStation?: string; // Ближайшая ж/д станция
    headquarters?: string; // Адрес штаб-квартиры
    phone?: string; // Телефон
    website?: string; // Веб-сайт
    museums?: string[]; // Музеи
    activities?: {
      hiking?: string; // Пеший туризм
      cycling?: string; // Велосипедные маршруты
      skiing?: string; // Лыжи
      educationalTrails?: string; // Образовательные тропы
      other?: string[]; // Другие активности
    };
    visitRecommendations?: string; // Рекомендации по посещению
  };
}

export interface VisitedLocation {
  name: string;
  visited: boolean;
  visitDate: string;
  notes?: string;
  coordinates: [number, number];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'adventure' | 'everyday';
  location: string;
  distanceFromGdansk: number; // in km
  image?: string; // URL or path to image
}

export interface ChallengeState {
  title: string;
  description: string;
  category: 'adventure' | 'everyday';
  location: string;
  revealed: boolean;
  completed: boolean;
  completionDate?: string;
  notes?: string;
  distanceFromGdansk: number;
  image?: string; // URL or path to image
}

export type VisitedLocationsData = Record<string, VisitedLocation>;
export type ChallengesData = Record<string, ChallengeState>;

