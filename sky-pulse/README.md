SkyPulse
SkyPulse is a whimsical, cartoon-inspired weather dashboard built for the Frontend UI Hackathon 2025. It features real-time mock weather data, location filters, animated weather characters, and a vibrant, playful UI.
Features

Weather Cards: Displays weather for 5 cities with temperature, humidity, and conditions.
Location Filters: Search bar to filter cities with bounce animations.
Detailed View: 5-day forecast with SVG-based temperature bars.
Unique Feature: Weather mood gradients and animated characters (sun, cloud, rain).
Responsive Design: Works on mobile (320px+) and desktop (1024px+).
Accessibility: ARIA labels, keyboard navigation, high contrast.

Tech Stack

React (via Vite)
Plain CSS (no frameworks)
JavaScript
Libraries: react-router-dom, framer-motion, react-hot-toast
Storage: localStorage for mock data
Deployment: Vercel

Setup

Clone the repository:
git clone https://github.com/your-username/sky-pulse.git
cd sky-pulse


Install dependencies:
npm install


Run the development server:
npm run dev


Build for production:
npm run build


Deploy to Vercel:

Push to GitHub.
Connect to Vercel and deploy.



Folder Structure
sky-pulse/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ForecastDetail.jsx
│   │   ├── WeatherCharacter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── styles/
│   │   ├── main.css
│   ├── data/
│   │   ├── mockData.js
│   ├── App.jsx
│   ├── main.jsx
├── public/
│   ├── favicon.ico
│   ├── sun.svg
│   ├── cloud.svg
│   ├── rain.svg
├── README.md
├── package.json
├── vite.config.js

Deployment

Deployed on Vercel: https://sky-pulse.vercel.app
GitHub Repo: https://github.com/your-username/sky-pulse

