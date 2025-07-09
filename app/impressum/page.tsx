import { Footer, Header } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className="page_container">
      
      <Header 
        activeButtonList={["", "", "", ""]}
      />



      <div style={{
        width: "calc(100% - 20%)",
        height: "fit-content",
        marginLeft: "10%",
        marginRight: "10%"
      }}>

        <br /><br /><br /><br /><br />

        <br />
        <p className="small">Impressum</p>
        <p className="small">Angaben gemäß § 5 Telemediengesetz (TMG)</p>


        <br />
        <p className="small">Destani Maler GmbH</p>
        <p className="small">Senefelderstraße 7</p>
        <p className="small">70736 Fellbach</p>
        <p className="small">Deutschland</p>

        <br />
        <p className="small">Vertreten durch:</p>
        <p className="small">Herr Latif Destani (Geschäftsführer)</p>


        <br />
        <p className="small">Kontakt:</p>
        <p className="small">Telefon: +49 (0)711 5104710</p>
        <p className="small">E-Mail: info@maler-destani.de</p>
        <p className="small">Webseite: www.maler-destani.de</p>

        <br />
        <p className="small">Registereintrag:</p>
        <p className="small">Eintragung im Handelsregister.</p>
        <p className="small">Registergericht: Amtsgericht Stuttgart</p>
        <p className="small">Handelsregisternummer: HRB 753417</p>

        <br />
        <p className="small">Umsatzsteuer-ID:
Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [Bitte hier ergänzen,
z. B. DE123456789</p>


        <br />
        <p className="small">Steuernummer:</p>
        <p className="small">90068/30411 (Finanzamt Waiblingen)</p>

        <br />
        <p className="small">Zuständige Kammer:</p>
        <p className="small">Handwerkskammer Region Stuttgart</p>
        <p className="small">Heilbronner Straße 43</p>
        <p className="small">70191 Stuttgart</p>
        <p className="small">www.hwk-stuttgart.de</p>

        <br />
        <p className="small">Berufsbezeichnung:</p>
        <p className="small">Maler- und Lackierermeister</p>
        <p className="small">(verliehen in der Bundesrepublik Deutschland)</p>

        <br />
        <p className="small">Berufsrechtliche Regelungen:</p>
        <p className="small">Es gilt die Handwerksordnung (HwO), einsehbar unter:</p>
        <p className="small">https://www.gesetze-im-internet.de/hwo/</p>

        <br />
        <p className="small">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
        <p className="small">Herr Latif Destani</p>

      </div>



        <br /><br /><br /><br /><br />
    <Footer />

    </div>
  )
}

export default page