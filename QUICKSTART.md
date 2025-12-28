# Quick Start Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Get Mapbox Token**
   - Visit [mapbox.com](https://account.mapbox.com/access-tokens/)
   - Sign up for a free account (50,000 map loads/month free)
   - Create an access token
   - Copy the token

3. **Create Environment File**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your Mapbox token:
   ```
   VITE_MAPBOX_TOKEN=pk.your_token_here
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - You should see the map of Poland with park markers

## Using the Application

### Map Page
- Click any gray marker to see park details
- Mark parks as visited with a date and optional notes
- Use the search bar to find specific parks
- Green markers indicate visited parks

### Challenges Page
- Scratch off the gray overlay to reveal challenges
- Or click "Reveal Challenge" button
- Mark challenges as completed when you finish them
- Add notes to remember your experiences
- Filter by category (Adventure/Everyday) or completion status

## Data Storage

All data is stored in your browser's localStorage:
- Visited locations with dates and notes
- Challenge progress and completion status
- Challenge notes

To clear all data, open browser DevTools → Application → Local Storage → Clear

## Building for Production

```bash
npm run build
```

The `dist` folder will contain the production build.

## Troubleshooting

**Map not showing?**
- Check that `VITE_MAPBOX_TOKEN` is set in `.env`
- Verify the token is valid in your Mapbox account
- Check browser console for errors

**Styles not loading?**
- Make sure Tailwind CSS is properly configured
- Run `npm install` again if needed

**Routing issues?**
- For local development, routing should work fine
- For GitHub Pages, see DEPLOYMENT.md

