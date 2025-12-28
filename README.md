# Map of Love - Polskie Parki i Wyzwania

A modern React + TypeScript web application for tracking visited parks and locations in Poland with driving challenges. This application helps you explore and document your adventures across Poland's beautiful national parks and discover new everyday escapes in the Trójmiasto area.

## Features

### Interactive Map Page
- **Mapbox GL JS Integration**: Beautiful interactive map of Poland
- **Color-coded Markers**: 
  - Gray markers for unvisited locations
  - Green markers for visited locations
- **Location Details**: Click any marker to see detailed information
- **Mark as Visited**: Save visit dates and optional notes
- **Search Functionality**: Quickly find parks by name
- **Smooth Animations**: Elegant transitions and interactions

### Challenges Page
- **Scratch-off Effect**: Interactive reveal mechanism for challenges (inspired by theadventurechallenge.com)
- **Two Challenge Categories**:
  - **Adventure Challenges**: Parks and nature experiences
  - **Everyday Escapes**: Cafes and restaurants in Trójmiasto area
- **Progress Tracking**: See how many challenges you've completed
- **Filtering**: Filter by category, completion status, or search
- **Completion System**: Mark challenges as completed with dates and notes
- **Celebration Animations**: Delightful feedback when completing challenges

### Additional Features
- **Responsive Design**: Mobile-first, works on all devices
- **LocalStorage Persistence**: All data saved locally (easy to migrate to backend later)
- **Statistics Dashboard**: Track progress in header and footer
- **Modern UI**: Adventure-themed design with forest greens, earthy browns, and gold accents

## Tech Stack

- **React 18+** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Mapbox GL JS** for interactive maps
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Mapbox account and access token (free tier available)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nadzeya/map-of-love-fe.git
cd map-of-love-fe
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

Get your Mapbox token from [mapbox.com](https://account.mapbox.com/access-tokens/)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will push the built files to the `gh-pages` branch, which GitHub Pages will serve.

**Note**: Make sure to update the `homepage` field in `package.json` to match your GitHub repository path.

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LocationDetailsPanel.tsx
│   └── ChallengeCard.tsx
├── pages/           # Main page components
│   ├── MapPage.tsx
│   └── ChallengesPage.tsx
├── data/            # Static data files
│   ├── parks.ts
│   └── challenges.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions
│   └── storage.ts
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Data Structure

### Visited Locations (localStorage)
```typescript
{
  locationId: {
    name: string,
    visited: boolean,
    visitDate: string, // ISO date
    notes?: string,
    coordinates: [number, number]
  }
}
```

### Challenges (localStorage)
```typescript
{
  challengeId: {
    title: string,
    description: string,
    category: 'adventure' | 'everyday',
    location: string,
    revealed: boolean,
    completed: boolean,
    completionDate?: string,
    notes?: string,
    distanceFromGdansk: number
  }
}
```

## Customization

### Adding New Parks
Edit `src/data/parks.ts` and add new park entries with coordinates, names, and descriptions.

### Adding New Challenges
Edit `src/data/challenges.ts` and add new challenge entries. Challenges can be either 'adventure' or 'everyday' category.

### Styling
The app uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize the color palette there.

## License

This project is created as a special gift. Feel free to use and modify as needed.

## Acknowledgments

- Inspired by [zparkudoparku.pl](https://zparkudoparku.pl) for park information
- Scratch-off effect inspired by [theadventurechallenge.com](https://theadventurechallenge.com)
- Map data and tiles provided by [Mapbox](https://mapbox.com)

