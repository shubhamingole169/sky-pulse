import { motion } from "framer-motion";

function ForecastDetail({ city, onClose }) {
  return (
    <motion.div
      className="forecast-detail"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="close-button" onClick={onClose} aria-label="Close forecast">
        ×
      </button>
      <h2>{city.name} - 5-Day Forecast</h2>
      <div className="forecast-grid">
        {city.forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{day.day}</p>
            <svg className="temp-bar" viewBox="0 0 20 100">
              <rect
                x="5"
                y={100 - day.temperature}
                width="10"
                height={day.temperature}
                fill="#ff9100"
              />
            </svg>
            <p>{day.temperature}°C</p>
            <p>{day.condition}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ForecastDetail;