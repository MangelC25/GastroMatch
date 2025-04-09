import { motion } from "motion/react";

export default function AnimatedText({ text, delayOffset = 0 }) {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: (delayOffset + index) * 0.1, // Retraso dinámico
          }}
          style={{
            display: "inline-block",
            color: text === "GastroMatch," ? "orange" : "inherit", // Aplicar color si es "Food Fleet"
          }}
        >
          {char === " " ? "\u00A0" : char} {/* Manejar espacios */}
        </motion.span>
      ))}
    </>
  );
}
