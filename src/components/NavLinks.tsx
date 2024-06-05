import { formatLinks } from "@/utils/HelperFunctions";
import Link from "next/link";

type NavLinksProps = {
  links: string[];
};

const NavLinks = (props: NavLinksProps) => {
  const { links } = props;
  const formattedLinks = formatLinks(links);

  return (
    <ul>
      {formattedLinks.map(({ linkName, linkRoute }, index) => (
        <li key={index}>
          <Link href={`/${linkRoute}`}>{linkName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
