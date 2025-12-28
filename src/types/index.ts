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
  category: 'adventure' | 'everyday' | 'navigation' | 'nature' | 'cultural' | 'local';
  location: string;
  distanceFromGdansk: number; // in km
  time: string; // Estimated trip duration (e.g., "2-3 hours", "Full day")
  tips: string; // Tips about when to do it (e.g., "Working day - open card after work", "Full day needed")
  image?: string; // URL or path to image
}

export interface ChallengeState {
  title: string;
  description: string;
  category: 'adventure' | 'everyday' | 'navigation' | 'nature' | 'cultural' | 'local';
  location: string;
  revealed: boolean;
  completed: boolean;
  completionDate?: string;
  notes?: string;
  distanceFromGdansk: number;
  time: string; // Estimated trip duration (e.g., "2-3 hours", "Full day")
  tips: string; // Tips about when to do it (e.g., "Working day - open card after work", "Full day needed")
  image?: string; // URL or path to image
}

export type VisitedLocationsData = Record<string, VisitedLocation>;
export type ChallengesData = Record<string, ChallengeState>;

