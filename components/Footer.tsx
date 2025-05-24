import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-navigation_columns_container">


          <div className="footer-navigation_columns_container-single_column">
            <p className="xx-large bold white">Destani Group</p>
            <br />
            <p className="medium white">
              Wir putzen Sie fein raus! Ihr Profi in Sachen Putz- und Maler-Arbeiten in Fellbach-Schmiden und im Umkreis.
            </p>
          </div>


          <div className="footer-navigation_columns_container-single_column">
            <p className="x-large bold white">Schnellzugriffe</p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Startseite</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/ueberuns" style={{color: "white", textDecoration: "none"}}>Über Uns</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/leistungen" style={{color: "white", textDecoration: "none"}}>Leistungen</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/projekte" style={{color: "white", textDecoration: "none"}}>Projekte</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="#kontaktform" style={{color: "white", textDecoration: "none"}}>Kontakt</a>
            </p>
          </div>


          <div className="footer-navigation_columns_container-single_column">
            <p className="x-large bold white">Kontaktieren Sie uns</p>
            <br />
            <p className="medium white linktext">
              <a href="mailto:info@maler-destani.de" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-envelope"
                style={{marginRight: "6px"}}></i> info@maler-destani.de</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="https://maps.app.goo.gl/vSTurYrutx3Q6vXx7" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-location-dot"
                style={{marginRight: "6px"}}></i> Senefelderstrasse 7 <br />70736 Fellbach-Schmiden</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="tel:+497115104710" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-phone"
                style={{marginRight: "6px"}}></i> 0711 - 510 47 10</a>
            </p>
          </div>


          <div className="footer-navigation_columns_container-single_column">
            <p className="x-large bold white">Folgen Sie uns</p>
            <br />

            <div className="footer-social_media_icons-container">
              <Link href="https://www.instagram.com/destanimalergmbh" className="footer-social_media_icons-container-single_icon_container">
                <p className="medium blue"><i className="fa-brands fa-instagram"></i></p>
              </Link>
              <Link href="https://www.facebook.com/share/1AYGV616Ha/" className="footer-social_media_icons-container-single_icon_container">
                <p className="medium blue"><i className="fa-brands fa-facebook"></i></p>
              </Link>
            </div>
          </div>


        </div>

        <div className="footer-bottom_row">

            <p className="medium white linktext">
              <a href="./datenschutz.pdf" style={{color: "white", textDecoration: "none"}}>Datenschutzerklärung</a>
            </p>

            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Impressum</a>
            </p>

            <p className="medium white linktext">
              <a href="./agb.pdf" style={{color: "white", textDecoration: "none"}}>AGB.</a>
            </p>
        </div>
    </div>
  )
}

export default Footer