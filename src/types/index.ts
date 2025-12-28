export interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [longitude, latitude]
  category?: string;
  image?: string; // URL or path to image
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

