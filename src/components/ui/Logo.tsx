import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "@/assets/bf-logo-header.png";
import FooterLogo from "@/assets/bf-logo-footer.png";

type LogoProps = {
  isHeader?: boolean;
};

const Logo = (props: LogoProps) => {
  const { isHeader } = props;
  return (
    <>
      {isHeader ? (
        <Link href="/">
          <Image src={HeaderLogo} alt="" />
        </Link>
      ) : (
        <Image src={FooterLogo} alt="" />
      )}
    </>
  );
};

export default Logo;
