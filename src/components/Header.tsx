import NavLinks from "./NavLinks";
import Logo from "./ui/Logo";

const Header = () => {
  const LINKS: string[] = ["Home", "About Us", "Programs", "Donate", "Contact"];

  return (
    <header>
      <Logo isHeader />
      <NavLinks links={LINKS} />
    </header>
  );
};

export default Header;
