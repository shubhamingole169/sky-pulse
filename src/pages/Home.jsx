import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastDetail from "../components/ForecastDetail";
import { getWeatherData, saveWeatherData } from "../data/mockData";

function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const data = getWeatherData();
    setWeatherData(data);
    setFilteredData(data);
  }, []);

  const handleSearch = (query) => {
    const filtered = weatherData.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleCardClick = (city) => {
    setSelectedCity(city);
  };

  const handleCloseDetail = () => {
    setSelectedCity(null);
  };

  return (
    <div className="home-container">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <motion.div className="weather-grid" layout>
        {filteredData.map((city) => (
          <WeatherCard
            key={city.name}
            city={city}
            isSelected={selectedCity?.name === city.name}
            onClick={() => handleCardClick(city)}
          />
        ))}
      </motion.div>
      {selectedCity && (
        <ForecastDetail city={selectedCity} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default Home;