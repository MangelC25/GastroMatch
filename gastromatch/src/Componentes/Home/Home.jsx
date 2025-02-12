import HomeSection from "./Sections/HomeSection";
import ServicesSection from "./Sections/ServicesSection";
import TopRestaurantsSection from "./Sections/TopRestaurantsSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <HomeSection />
      <motion.div
        className="shapedividers_com-4450"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      ></motion.div>
      <ServicesSection />
      <motion.div
        className="shapedividers_com-117"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      ></motion.div>
      <TopRestaurantsSection />
    </>
  );
}
