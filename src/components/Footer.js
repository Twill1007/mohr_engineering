import "./footer.css";
import Image from "next/legacy/image";

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
      </div>
      <p className="footerCoContainer">Mohr Engineering Services, LLC.</p>
    </footer>
  );
}

export default Footer;
