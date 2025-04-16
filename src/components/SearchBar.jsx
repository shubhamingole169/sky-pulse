import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
    if (value) {
      toast.success(`Searching for ${value}!`, { icon: "🔍" });
    }
  };

  return (
    <motion.div
      className="search-bar"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        aria-label="Search for a city"
      />
    </motion.div>
  );
}

export default SearchBar;