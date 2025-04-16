import { motion } from "framer-motion";
import SunSvg from "../../public/sun.jpg";
import CloudSvg from "../../public/cloud.jpg";
import RainSvg from "../../public/rain.jpg";

function WeatherCharacter({ condition }) {
  const getCharacter = () => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return SunSvg;
      case "cloudy":
        return CloudSvg;
      case "rainy":
        return RainSvg;
      default:
        return CloudSvg;
    }
  };

  return (
    <motion.img
      src={getCharacter()}
      alt={`${condition} character`}
      className="weather-character"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { repeat: Infinity, duration: 2 },
        rotate: { repeat: Infinity, duration: 3 },
      }}
    />
  );
}

export default WeatherCharacter;