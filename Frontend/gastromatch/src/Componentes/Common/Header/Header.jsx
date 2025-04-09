import Logo from "./Logo";
import MenuBar from "./MenuBar/MenuBar";
import SearchBox from "./Search";
import AuthenticationMenu from "./UserMenu/AuthenticationMenu.jsx";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      id="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5}}
    >
      <Logo />
      <MenuBar />
      <SearchBox />
      <AuthenticationMenu />
    </motion.header>
  );
}
