"use client";
import Link from "next/link";
import ME_logo from "../../constants/images/ME_logo.png";
import React, { useState } from "react";
import NavItem from "./NavItem";
import "../components/NavBar.css";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Work", href: "/work" },
  { text: "About Mohr", href: "/about" },
  { text: "Contact", href: "/contact" },
];

function NavBar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <div>
            <img
              src={ME_logo}
              alt="logo"
            />
          </div>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem
                active={activeIdx === idx}
                {...menu}
              />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
