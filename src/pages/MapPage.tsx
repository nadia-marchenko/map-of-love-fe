import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { parks } from '../data/parks';
import { getVisitedLocations, updateVisitedLocation } from '../utils/storage';
import LocationDetailsPanel from '../components/LocationDetailsPanel';
import { Location, VisitedLocation } from '../types';
import { Search } from 'lucide-react';

const MapPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [visitedLocations, setVisitedLocations] = useState<Record<string, VisitedLocation>>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!mapContainer.current) return;

    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
    if (!mapboxToken) {
      console.error('Mapbox token not found. Please set VITE_MAPBOX_TOKEN in .env file');
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [18.5, 54.0], // Center on Poland, closer to Gdańsk
      zoom: 6,
    });

    // Initialize visited locations
    const visited = getVisitedLocations();
    setVisitedLocations(visited);

    // Add markers
    const markers: mapboxgl.Marker[] = [];
    parks.forEach(park => {
      const visitedLocation = visited[park.id];
      const color = visitedLocation?.visited ? '#22c55e' : '#6b7280'; // green : gray
      
      // Create wrapper that Mapbox will position (no position: relative to avoid scroll issues)
      const wrapper = document.createElement('div');
      wrapper.style.width = '20px';
      wrapper.style.height = '20px';
      wrapper.style.cursor = 'pointer';
      wrapper.setAttribute('data-park-id', park.id);
      // Don't set position: relative - Mapbox handles positioning
      
      // Create the actual marker circle, absolutely positioned within wrapper
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.position = 'absolute';
      el.style.top = '0';
      el.style.left = '0';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.backgroundColor = color;
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.transition = 'transform 0.3s ease';
      el.style.transformOrigin = 'center center';
      
      wrapper.appendChild(el);

      const marker = new mapboxgl.Marker({
        element: wrapper,
        anchor: 'center'
      })
        .setLngLat(park.coordinates)
        .addTo(map.current!);

      // Add click handler to wrapper
      wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSelectedLocation(park);
      });

      // Add hover effect to inner element only (only if not selected)
      wrapper.addEventListener('mouseenter', () => {
        const isSelected = wrapper.getAttribute('data-selected') === 'true';
        if (!isSelected) {
          el.style.transform = 'scale(1.3)';
        }
      });

      wrapper.addEventListener('mouseleave', () => {
        const isSelected = wrapper.getAttribute('data-selected') === 'true';
        if (!isSelected) {
          el.style.transform = 'scale(1)';
        }
      });

      markers.push(marker);
    });

    markersRef.current = markers;

    return () => {
      markersRef.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Update markers when visited locations change
  useEffect(() => {
    if (!map.current || markersRef.current.length === 0) return;

    parks.forEach((park, index) => {
      const visited = visitedLocations[park.id];
      const color = visited?.visited ? '#22c55e' : '#6b7280';
      const marker = markersRef.current[index];
      
      if (marker) {
        const wrapper = marker.getElement();
        if (wrapper) {
          // Find the inner marker element
          const innerEl = wrapper.querySelector('.marker') as HTMLElement;
          if (innerEl) {
            innerEl.style.backgroundColor = color;
          }
        }
      }
    });
  }, [visitedLocations]);

  // Update marker size when selected location changes
  useEffect(() => {
    if (!map.current || markersRef.current.length === 0) return;

    parks.forEach((park, index) => {
      const marker = markersRef.current[index];
      if (marker) {
        const wrapper = marker.getElement();
        if (wrapper) {
          const innerEl = wrapper.querySelector('.marker') as HTMLElement;
          if (innerEl) {
            const isSelected = selectedLocation && selectedLocation.id === park.id;
            // Scale up selected marker, scale down others
            if (isSelected) {
              innerEl.style.transform = 'scale(2)';
              innerEl.style.zIndex = '10';
              wrapper.setAttribute('data-selected', 'true');
            } else {
              innerEl.style.transform = 'scale(1)';
              innerEl.style.zIndex = '1';
              wrapper.setAttribute('data-selected', 'false');
            }
          }
        }
      }
    });
  }, [selectedLocation]);

  const handleMarkAsVisited = (locationId: string, visitDate: string, notes?: string) => {
    updateVisitedLocation(locationId, {
      visited: true,
      visitDate,
      notes,
    });
    
    const updated = getVisitedLocations();
    setVisitedLocations(updated);
    
    // Trigger stats update
    window.dispatchEvent(new Event('statsUpdated'));
    
    setSelectedLocation(null);
  };

  const handleClosePanel = () => {
    setSelectedLocation(null);
  };

  const filteredParks = parks.filter(park =>
    park.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative h-[calc(100vh-140px)]">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 z-10 w-full max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earth-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for park..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-earth-300 bg-cream-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-forest-500"
          />
        </div>
        
        {/* Search Results */}
        {searchQuery && filteredParks.length > 0 && (
          <div className="mt-2 bg-cream-50 rounded-lg shadow-lg border border-earth-300 max-h-64 overflow-y-auto">
            {filteredParks.map(park => (
              <button
                key={park.id}
                onClick={() => {
                  setSelectedLocation(park);
                  setSearchQuery('');
                  map.current?.flyTo({
                    center: park.coordinates,
                    zoom: 10,
                    duration: 1000,
                  });
                }}
                className="w-full text-left px-4 py-2 hover:bg-forest-50 transition-smooth border-b border-earth-200 last:border-b-0"
              >
                <div className="font-medium text-earth-900">{park.name}</div>
                <div className="text-sm text-earth-600">{park.category}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Map Container */}
      <div className="relative w-full h-full overflow-hidden">
        <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
        
        {/* Location Details Panel */}
        {selectedLocation && (
          <LocationDetailsPanel
            location={selectedLocation}
            visitedLocation={visitedLocations[selectedLocation.id]}
            onMarkAsVisited={handleMarkAsVisited}
            onClose={handleClosePanel}
          />
        )}
      </div>
    </div>
  );
};

export default MapPage;

