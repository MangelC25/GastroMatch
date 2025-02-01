import Header from "./Componentes/Header/Header";
import { TopBar } from "./Componentes/TopBar/TopBar";
import { motion } from "motion/react";

export default function App() {
  return (
    <>
      <motion.div
        className="TopBar"
        initial={{ translateY: -55 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TopBar />
      </motion.div>
      <Header />
    </>
  );
}
