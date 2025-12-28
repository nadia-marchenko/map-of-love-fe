# Deployment Guide

## GitHub Pages Deployment

This application is configured for deployment to GitHub Pages.

### Prerequisites

1. A GitHub repository
2. A Mapbox account and access token

### Steps

1. **Get a Mapbox Token**
   - Go to [mapbox.com](https://account.mapbox.com/access-tokens/)
   - Sign up for a free account (if you don't have one)
   - Create a new access token
   - Copy the token

2. **Set up Environment Variable**
   - Create a `.env` file in the root directory
   - Add: `VITE_MAPBOX_TOKEN=your_token_here`
   - **Important**: For GitHub Pages, you'll need to set this as a GitHub Secret and use it in GitHub Actions, OR use a public token (not recommended for production)

3. **Update Repository Path**
   - Edit `package.json` and update the `homepage` field to match your repository:
     ```json
     "homepage": "https://yourusername.github.io/your-repo-name"
     ```
   - Edit `vite.config.ts` and update the `base` field:
     ```typescript
     base: '/your-repo-name/',
     ```
   - Edit `src/App.tsx` and update the `basename` in BrowserRouter:
     ```typescript
     <BrowserRouter basename="/your-repo-name">
     ```

4. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "gh-pages" branch as the source
   - Save

6. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/your-repo-name`

### Alternative: GitHub Actions Deployment

For a more automated approach, you can set up GitHub Actions:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_MAPBOX_TOKEN: ${{ secrets.VITE_MAPBOX_TOKEN }}
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Add `VITE_MAPBOX_TOKEN` as a GitHub Secret in your repository settings.

### Troubleshooting

- **404 errors on refresh**: Make sure the `404.html` file is in the `public` folder and will be copied to `dist` during build
- **Map not loading**: Check that your Mapbox token is correctly set
- **Routing issues**: Verify the `base` and `basename` paths match your repository name

