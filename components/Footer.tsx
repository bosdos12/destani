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
              <a href="/" style={{color: "white", textDecoration: "none"}}>Projekte</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Leistungen</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Über Uns</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Impressum</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}>Datenschutzerklärung</a>
            </p>
          </div>


          <div className="footer-navigation_columns_container-single_column">
            <p className="x-large bold white">Kontaktieren Sie uns</p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-envelope"
                style={{marginRight: "6px"}}></i> info@maler-destani.de</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-location-dot"
                style={{marginRight: "6px"}}></i> Senefelderstrasse 7 <br />70736 Fellbach-Schmiden</a>
            </p>
            <br />
            <p className="medium white linktext">
              <a href="/" style={{color: "white", textDecoration: "none"}}><i className="fa-solid fa-phone"
                style={{marginRight: "6px"}}></i> 0711 – 510 47 10</a>
            </p>
          </div>


          <div className="footer-navigation_columns_container-single_column">
            <p className="x-large bold white">Folgen Sie uns</p>
            <br />

            <div className="footer-social_media_icons-container">
              <div className="footer-social_media_icons-container-single_icon_container">
                <p className="medium blue"><i className="fa-brands fa-instagram"></i></p>
              </div>
              <div className="footer-social_media_icons-container-single_icon_container">
                <p className="medium blue"><i className="fa-brands fa-facebook"></i></p>
              </div>
            </div>
          </div>


        </div>
    </div>
  )
}

export default Footer