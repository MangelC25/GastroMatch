import ContactInfo from "./ContactInfo";
import SocialInfo from "./SocialIcons";
import { motion } from "motion/react";

export function TopBar() {
  return (
    <motion.div
      className="ContainTopBar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ContactInfo />
      <SocialInfo />
    </motion.div>
  );
}
