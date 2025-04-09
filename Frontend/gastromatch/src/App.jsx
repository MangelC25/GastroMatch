import Header from "./Componentes/Common/Header/Header";
import { TopBar } from "./Componentes/Common/TopBar/TopBar";
import { motion } from "motion/react";
import Home from "./Componentes/Home/Home";

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
      <Home/>
    </>
  );
}
