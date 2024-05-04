import "./footer.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <Image
          src="/Mohr_LOGO_Horiz.png"
          width={300}
          height={100}
          priority={true} // {false} | {true}
          alt="logo"
        />
        <p className="roboto-thin">
          © 2024 Mohr Engineering Services, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
