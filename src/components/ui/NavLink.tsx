import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
};

const NavLink = (props: NavLinkProps) => {
  const { children } = props;
  return <Link href="">{children}</Link>;
};

export default NavLink;
