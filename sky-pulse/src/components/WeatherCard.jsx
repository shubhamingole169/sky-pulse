import { motion } from "framer-motion";
import WeatherCharacter from "./WeatherCharacter";

function WeatherCard({ city, isSelected, onClick }) {
  const getMoodGradient = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "linear-gradient(135deg, #ff9100, #ffd740)";
      case "cloudy":
        return "linear-gradient(135deg, #40c4ff, #b0bec5)";
      case "rainy":
        return "linear-gradient(135deg, #0288d1, #40c4ff)";
      default:
        return "linear-gradient(135deg, #76ff03, #ccff90)";
    }
  };

  return (
    <motion.div
      className={`weather-card ${isSelected ? "selected" : ""}`}
      style={{ background: getMoodGradient(city.condition) }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Weather for ${city.name}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <WeatherCharacter condition={city.condition} />
      <h2>{city.name}</h2>
      <p className="temperature">{city.temperature}°C</p>
      <p className="condition">{city.condition}</p>
      <p className="humidity">Humidity: {city.humidity}%</p>
    </motion.div>
  );
}

export default WeatherCard;