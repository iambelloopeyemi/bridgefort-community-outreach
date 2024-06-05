import NavLink from "./ui/NavLink";

type NavLinksProps = {
  menu: string[];
  isHeader?: boolean;
};

const NavLinks = (props: NavLinksProps) => {
  const { menu } = props;

  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index}>
          <NavLink>{item}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
