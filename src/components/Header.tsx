import NavBar from "./NavBar";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header>
      <Logo isHeader />
      <NavBar />
    </header>
  );
};

export default Header;
