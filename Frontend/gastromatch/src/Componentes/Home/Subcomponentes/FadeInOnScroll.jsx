
import { useInView } from "react-intersection-observer"
import { motion } from "motion/react";

export default function FadeInOnScroll({ children }) {
  const { ref, inView } = useInView({
    threshold: 0, // Activa cuando el % del elemento es visible
    triggerOnce: false, // Se puede disparar múltiples veces
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}