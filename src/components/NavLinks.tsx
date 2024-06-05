import { transformLinks } from "@/utils/HelperFunctions";
import Link from "next/link";

type NavLinksProps = {
  links: string[];
};

const NavLinks = (props: NavLinksProps) => {
  const { links } = props;
  const transformedLinks = transformLinks(links);

  return (
    <ul>
      {transformedLinks.map(({ linkName, linkRoute }, index) => (
        <li key={index}>
          <Link href={`/${linkRoute}`}>{linkName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
