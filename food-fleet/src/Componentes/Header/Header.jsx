import Logo from "./Logo";
import MenuBar from "./MenuBar/MenuBar";
import SearchBox from "./Search";
import AuthenticationMenu from "./UserMenu/AuthenticationMenu.jsx" ;

export default function Header() {
  return (
    <header id="header">
      <Logo />
      <MenuBar />
      <SearchBox/>
      <AuthenticationMenu/>
    </header>
  );
}
