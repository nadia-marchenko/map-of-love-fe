# GitHub Pages Setup Guide

## GitHub Repository Settings

### Step 1: Configure GitHub Pages
1. Go to your repository: `https://github.com/nadia-marchenko/map-of-love-fe`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `gh-pages`
   - **Folder**: Select `/ (root)`
5. Click **Save**

### Step 2: Verify Settings
- Your site will be available at: `https://nadia-marchenko.github.io/map-of-love-fe/`
- It may take 2-10 minutes for changes to propagate globally

## Fixing Styles Not Loading

If styles aren't loading on the deployed site, try these steps:

### 1. Hard Refresh Your Browser
**Chrome/Edge (Windows/Linux):**
- Press `Ctrl + Shift + R` or `Ctrl + F5`

**Chrome/Edge (Mac):**
- Press `Cmd + Shift + R`

**Firefox:**
- Press `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)

**Safari:**
- Press `Cmd + Option + R`

### 2. Clear Browser Cache
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select **"Empty Cache and Hard Reload"**

Or manually:
1. Go to browser Settings → Privacy
2. Clear browsing data
3. Select "Cached images and files"
4. Time range: "Last hour" or "All time"
5. Click "Clear data"

### 3. Test in Incognito/Private Mode
- Open a new incognito/private window
- Visit: `https://nadia-marchenko.github.io/map-of-love-fe/`
- This bypasses all cached files

### 4. Verify CSS is Loading
1. Open DevTools (F12)
2. Go to **Network** tab
3. Reload the page
4. Look for `index-329XS1er.css` (or similar)
5. It should show status **200** (not 404)
6. Click on it to verify the CSS content is there

### 5. Check Console for Errors
1. Open DevTools (F12)
2. Go to **Console** tab
3. Look for any CSS loading errors
4. Look for CORS errors
5. The CSS path should be: `/map-of-love-fe/assets/index-329XS1er.css`

### 6. Wait for CDN Propagation
- GitHub Pages uses a CDN that can take 5-10 minutes to update globally
- If you just deployed, wait a few minutes and try again

## Current Configuration

✅ **Base Path**: `/map-of-love-fe/` (configured in `vite.config.ts`)
✅ **Router Basename**: `/map-of-love-fe` (configured in `App.tsx`)
✅ **Homepage**: `https://nadia-marchenko.github.io/map-of-love-fe` (in `package.json`)
✅ **.nojekyll File**: Automatically created during build
✅ **Deploy Script**: Includes `-t` flag to deploy dotfiles

## Troubleshooting

### If styles still don't load after trying above:

1. **Check the deployed CSS file directly:**
   ```
   https://nadia-marchenko.github.io/map-of-love-fe/assets/index-329XS1er.css
   ```
   - If this returns 404, the file wasn't deployed correctly
   - If it returns CSS content, the file is there and it's a caching issue

2. **Redeploy:**
   ```bash
   npm run deploy
   ```

3. **Check GitHub Pages build status:**
   - Go to your repository → Actions tab
   - Check if there are any build errors

4. **Verify .nojekyll is deployed:**
   - Visit: `https://nadia-marchenko.github.io/map-of-love-fe/.nojekyll`
   - Should return empty (not 404)

## Deployment Command

To deploy your site:
```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Create `.nojekyll` file
3. Deploy to `gh-pages` branch

