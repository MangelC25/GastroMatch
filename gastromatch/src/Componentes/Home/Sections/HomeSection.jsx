import SearchBox from "../../Header/Search";
import { motion, AnimatePresence } from "motion/react";
import AnimatedText from "../Subcomponentes/AnimatedText";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const images = [
    "./../../../../../src/assets/img/a.jpg",
    "./../../../../../src/assets/img/b.jpg",
    "./../../../../../src/assets/img/c.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar el texto del botón basado en la imagen actual
  const getButtonText = () => {
    switch (currentImageIndex) {
      case 0:
        return "Reservar ahora";
      case 1:
        return "Ver eventos";
      case 2:
        return "Pedir a domicilio";
      default:
        return "";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <motion.section
      id="HomeSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
    >
      <div id="PersonaContainer">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="background-image"
          ></motion.div>
        </AnimatePresence>
      </div>
      <div id="HomeContainer">
        <h1>
          <AnimatedText text="Bienvenido a " delayOffset={0} />
          <AnimatedText text="GastroMatch," delayOffset={12} />
          <AnimatedText text="tu aliado en cada antojo" delayOffset={24} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        >
          Descubre experiencias gastronómicas únicas con GastroMatch. Reserva
          mesas en los mejores restaurantes, accede a eventos exclusivos y
          disfruta de experiencias culinarias personalizadas. Desde cenas
          románticas hasta catas de vino, encuentra el plan perfecto para cada
          ocasión.
        </motion.p>
        <SearchBox />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          className="cta-button"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentImageIndex} // Cambia el texto según el índice
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {getButtonText()}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.section>
  );
}
