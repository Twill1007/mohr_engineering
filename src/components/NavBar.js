"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import "../components/NavBar.css";

const MENU_LIST = [
  {
    text: "Work",
    options: [
      { text: "Consulting", href: "/work/consulting" },
      { text: "STC", href: "/work/stc" },
    ],
  },
  { text: "About Mohr", href: "/about" },
  { text: "Contact", href: "/contact" },
];

function NavBar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/home"}>
          <div>
            <Image
              src="/Mohr_LOGO_Horiz.png"
              width={300}
              height={100}
              priority={true} // {false} | {true}
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
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div key={menu.text}>
              {menu.options ? (
                <div className="dropdown">
                  <span className="nav__dropdown-header">{menu.text}</span>
                  <div className="dropdown-content">
                    {menu.options.map((option, index) => (
                      <Link
                        href={option.href}
                        key={index}
                      >
                        <div
                          className={`nav__menu-item ${
                            activeIdx === idx && "active"
                          }`}
                          onClick={() => {
                            setActiveIdx(idx);
                            setNavActive(false);
                          }}
                        >
                          {option.text}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                >
                  <NavItem
                    active={activeIdx === idx}
                    {...menu}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
