import { VisitedLocationsData, ChallengesData, VisitedLocation, ChallengeState } from '../types';
import { parks } from '../data/parks';
import { challenges } from '../data/challenges';

const VISITED_LOCATIONS_KEY = 'map-of-love-visited-locations';
const CHALLENGES_KEY = 'map-of-love-challenges';

// Initialize visited locations from parks data
export const initializeVisitedLocations = (): VisitedLocationsData => {
  const stored = localStorage.getItem(VISITED_LOCATIONS_KEY);
  let existing: VisitedLocationsData = {};
  
  if (stored) {
    existing = JSON.parse(stored);
  }
  
  // Merge new parks into existing data
  const updated: VisitedLocationsData = { ...existing };
  parks.forEach(park => {
    if (!updated[park.id]) {
      // Add new parks that don't exist in storage
      updated[park.id] = {
        name: park.name,
        visited: false,
        visitDate: '',
        notes: '',
        coordinates: park.coordinates,
      };
    } else {
      // Update coordinates if they changed
      updated[park.id].coordinates = park.coordinates;
    }
  });
  
  // Remove parks that no longer exist in the parks array
  Object.keys(updated).forEach(id => {
    if (!parks.find(p => p.id === id)) {
      delete updated[id];
    }
  });
  
  localStorage.setItem(VISITED_LOCATIONS_KEY, JSON.stringify(updated));
  return updated;
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
      time: challenge.time,
      tips: challenge.tips,
      image: challenge.image,
    };
  });
  
  localStorage.setItem(CHALLENGES_KEY, JSON.stringify(initial));
  return initial;
};

// Get visited locations
export const getVisitedLocations = (): VisitedLocationsData => {
  // Always initialize to ensure new parks are added to storage
  return initializeVisitedLocations();
};

// Get challenges
export const getChallenges = (): ChallengesData => {
  const stored = localStorage.getItem(CHALLENGES_KEY);
  if (!stored) {
    return initializeChallenges();
  }
  const challengesData = JSON.parse(stored);
  
  // Merge new fields from source data for backward compatibility
  challenges.forEach(challenge => {
    if (challengesData[challenge.id]) {
      if (!challengesData[challenge.id].image) {
        challengesData[challenge.id].image = challenge.image;
      }
      if (!challengesData[challenge.id].time) {
        challengesData[challenge.id].time = challenge.time;
      }
      if (!challengesData[challenge.id].tips) {
        challengesData[challenge.id].tips = challenge.tips;
      }
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
  const challengesData = getChallenges();
  
  const visitedCount = Object.values(locations).filter(loc => loc.visited).length;
  const totalParks = parks.length; // Use actual parks array length
  const completedChallenges = Object.values(challengesData).filter(ch => ch.completed).length;
  const totalChallenges = Object.keys(challengesData).length; // Get count of challenge objects
  
  return {
    visitedParks: visitedCount,
    totalParks,
    completedChallenges,
    totalChallenges,
  };
};

