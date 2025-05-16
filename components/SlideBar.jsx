"use client";
import React from 'react'
import Link from 'next/link';


const SlideBar = () => {
  
  function hideSlidebar() {
    const slideBar = document.getElementById("slide__bar");
    const fatimes = document.getElementById("fatimes");

    slideBar.style.transform = 'translateX(-100%)'; // Move the sidebar out of view
    setTimeout(() => {
      slideBar.style.visibility = 'hidden'; // Hide the sidebar after it slides out
      fatimes.style.visibility = 'hidden'; // Also hide the 'X' icon
    }, 500); // This timeout should match the transition time of the sidebar
  }

  return (
    <div className="slide__bar" id="slide__bar">
      <div className="header__texts-single__container" id="fatimes__container" style={{zIndex: "900"}} onClick={hideSlidebar}>
        <i className="fa-solid fa-times" id="fatimes"></i>
      </div>


      <Link href="/" style={{textDecoration: "none"}}>
        <p className="x-large white">Startseite</p>
      </Link>

      <Link href="/uberuns" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="x-large white">Über uns</p>
      </Link>

      <Link href="/leistungen" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="x-large white">Leistungen</p>
      </Link>
      
      <Link href="/projekte" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="x-large white">Projekte</p>
      </Link>

      <Link href="/kontakt" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="x-large white">Kontakt</p>
      </Link>


    </div>
  )
}

export default SlideBar