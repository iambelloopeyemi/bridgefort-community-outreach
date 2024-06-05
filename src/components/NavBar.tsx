import NavLinks from "./NavLinks";

const NavBar = () => {
  const menu = ["home", "about-us", "programs", "donate", "contact"];

  return (
    <nav>
      <NavLinks menu={menu} />
    </nav>
  );
};

export default NavBar;
