import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>SkyPulse</h1>
    </motion.header>
  );
}

export default Header;