import { VisitedLocationsData, ChallengesData, VisitedLocation, ChallengeState } from '../types';
import { parks } from '../data/parks';
import { challenges } from '../data/challenges';

const VISITED_LOCATIONS_KEY = 'map-of-love-visited-locations';
const CHALLENGES_KEY = 'map-of-love-challenges';

// Initialize visited locations from parks data
export const initializeVisitedLocations = (): VisitedLocationsData => {
  const stored = localStorage.getItem(VISITED_LOCATIONS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  const initial: VisitedLocationsData = {};
  parks.forEach(park => {
    initial[park.id] = {
      name: park.name,
      visited: false,
      visitDate: '',
      notes: '',
      coordinates: park.coordinates,
    };
  });
  
  localStorage.setItem(VISITED_LOCATIONS_KEY, JSON.stringify(initial));
  return initial;
};

// Initialize challenges from challenges data
export const initializeChallenges = (): ChallengesData => {
  const stored = localStorage.getItem(CHALLENGES_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  const initial: ChallengesData = {};
  challenges.forEach(challenge => {
    initial[challenge.id] = {
      title: challenge.title,
      description: challenge.description,
      category: challenge.category,
      location: challenge.location,
      revealed: false,
      completed: false,
      completionDate: undefined,
      notes: '',
      distanceFromGdansk: challenge.distanceFromGdansk,
      image: challenge.image,
    };
  });
  
  localStorage.setItem(CHALLENGES_KEY, JSON.stringify(initial));
  return initial;
};

// Get visited locations
export const getVisitedLocations = (): VisitedLocationsData => {
  const stored = localStorage.getItem(VISITED_LOCATIONS_KEY);
  if (!stored) {
    return initializeVisitedLocations();
  }
  return JSON.parse(stored);
};

// Get challenges
export const getChallenges = (): ChallengesData => {
  const stored = localStorage.getItem(CHALLENGES_KEY);
  if (!stored) {
    return initializeChallenges();
  }
  const challengesData = JSON.parse(stored);
  
  // Merge images from source data for backward compatibility
  challenges.forEach(challenge => {
    if (challengesData[challenge.id] && !challengesData[challenge.id].image) {
      challengesData[challenge.id].image = challenge.image;
    }
  });
  
  return challengesData;
};

// Update visited location
export const updateVisitedLocation = (locationId: string, data: Partial<VisitedLocation>): void => {
  const locations = getVisitedLocations();
  if (locations[locationId]) {
    locations[locationId] = { ...locations[locationId], ...data };
    localStorage.setItem(VISITED_LOCATIONS_KEY, JSON.stringify(locations));
  }
};

// Update challenge
export const updateChallenge = (challengeId: string, data: Partial<ChallengeState>): void => {
  const challenges = getChallenges();
  if (challenges[challengeId]) {
    challenges[challengeId] = { ...challenges[challengeId], ...data };
    localStorage.setItem(CHALLENGES_KEY, JSON.stringify(challenges));
  }
};

// Get stats
export const getStats = () => {
  const locations = getVisitedLocations();
  const challenges = getChallenges();
  
  const visitedCount = Object.values(locations).filter(loc => loc.visited).length;
  const totalParks = Object.keys(locations).length;
  const completedChallenges = Object.values(challenges).filter(ch => ch.completed).length;
  const totalChallenges = Object.keys(challenges).length;
  
  return {
    visitedParks: visitedCount,
    totalParks,
    completedChallenges,
    totalChallenges,
  };
};

