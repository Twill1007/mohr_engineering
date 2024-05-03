import Link from "next/link";

function NavItem({ text, href, active }) {
  return (
    <Link href={href} legacyBehavior>
      <div className={`nav__item ${active ? "active" : ""}`}>{text}</div>
    </Link>
  );
}

export default NavItem;
