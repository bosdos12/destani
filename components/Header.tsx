"use client"
import Link from 'next/link';
import React from 'react'


interface Props {
  activeButtonList: Array<any>;
}

const Header = ({
  activeButtonList
}: Props) => {

  const viewSlidebar = () => {
    (document.getElementById("fatimes") as HTMLElement).style.visibility = "visible";
    const slideBar = (document.getElementById("slide__bar") as HTMLElement);
    slideBar.style.visibility = "visible";
    slideBar.style.transform = 'translateX(-100%)'; // Start from the left
    setTimeout(() => {
      slideBar.style.transition = 'transform 0.5s ease-out';
      slideBar.style.transform = 'translateX(0)';
    }, 10); // Timeout to allow CSS to register the starting position
  }

  return (
    <div className="header">
        <div className="header-logo_container">
          <img src="/destanilogo.svg" alt="" className="header-logo" />
        </div>

        <div className="header-navbuttons_container">

          <Link href="" className={`header-navbuttons_container-single_navbutton ${activeButtonList[0]}`}
            style={{textDecoration: "none"}}
          >
            <p className="large">Startseite</p>
          </Link>

          <Link href="/uberuns" className={`header-navbuttons_container-single_navbutton ${activeButtonList[1]}`}
            style={{textDecoration: "none"}}
          >
            <p className="large">Über Uns</p>
          </Link>

          <Link href="/leistungen" className={`header-navbuttons_container-single_navbutton ${activeButtonList[2]}`}
            style={{textDecoration: "none"}}
          >
            <p className="large">Leistungen</p>
          </Link>

          <Link href="/projekte" className={`header-navbuttons_container-single_navbutton ${activeButtonList[3]}`}
            style={{textDecoration: "none"}}
          >
            <p className="large">Projekte</p>
          </Link>

        </div>

        <div className="header-contact_button_container">
          <Link href="#kontaktform" className="header-contact_button"
            style={{textDecoration: "none"}}
          >
            <p className="large">Kontakt</p>
          </Link>
        </div>

        <p className="header-mobile_open_slidebar_button" onClick={() => viewSlidebar()}><i className="fa-solid fa-bars"></i></p>
    </div>
  )
}

export default Header