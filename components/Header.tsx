"use client"
import React from 'react'

const Header = () => {

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

          <div className="header-navbuttons_container-single_navbutton active">
            <p className="large">Startseite</p>
          </div>

          <div className="header-navbuttons_container-single_navbutton">
            <p className="large">Über Uns</p>
          </div>

          <div className="header-navbuttons_container-single_navbutton">
            <p className="large">Leistungen</p>
          </div>

          <div className="header-navbuttons_container-single_navbutton">
            <p className="large">Projekte</p>
          </div>

        </div>

        <div className="header-contact_button_container">
          <div className="header-contact_button">
            <p className="large">Kontakt</p>
          </div>
        </div>

        <p className="header-mobile_open_slidebar_button" onClick={() => viewSlidebar()}><i className="fa-solid fa-bars"></i></p>
    </div>
  )
}

export default Header