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
        <p className="large bold">Datenschutzerklärung</p>
        <br /><br />
        <p className="medium bold">1. Allgemeine Hinweise</p>
        <p className="small">Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir, die Destani
Maler GmbH, behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

        <br />
        <p className="medium bold">2. Verantwortliche Stelle</p>
        <p className="small">Destani Maler GmbH
Adresse: Senefeldstrasse 7, Fellbach 7073
Telefon: +49 711 510 4710
E-Mail: info@maler-destani.de</p>

        <br />
        <p className="medium bold">3. Erhebung und Speicherung personenbezogener Daten</p>
        <p className="small">
Beim Besuch unserer Website werden automatisch Informationen durch den Webserver
erfasst (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser). Diese
Daten dienen ausschließlich der technischen Sicherheit und Verbesserung unseres
Angebots.
Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben
zur Bearbeitung Ihrer Anfrage gespeichert.</p>

        <br />
        <p className="medium bold">4. Verwendung der Daten</p>
        <p className="small">Wir verwenden Ihre Daten ausschließlich zu folgenden Zwecken: <br />
● Zur Bereitstellung und Optimierung unserer Website <br />
● Zur Bearbeitung Ihrer Anfragen <br />
● Zur Erfüllung gesetzlicher Pflichten <br /> <br />
Es erfolgt keine Weitergabe Ihrer Daten an Dritte, außer wenn dies gesetzlich
vorgeschrieben ist oder zur Vertragserfüllung notwendig.</p>

        <br />
        <p className="medium bold">5. Cookies</p>
        <p className="small">
Unsere Website verwendet Cookies. Diese dienen dazu, unser Angebot nutzerfreundlicher
und sicherer zu machen. Sie können die Verwendung von Cookies in den Einstellungen
Ihres Browsers einschränken oder deaktivieren.</p>


        <br />
        <p className="medium bold">6. Ihre Rechte</p>
        <p className="small">Sie haben das Recht auf: <br />
● Auskunft über Ihre gespeicherten Daten <br />
● Berichtigung unrichtiger Daten <br />
● Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht <br />
● Einschränkung der Verarbeitung <br />
● Widerspruch gegen die Verarbeitung <br />
● Datenübertragbarkeit <br /> <br />
Bitte wenden Sie sich dazu an: [Ihre E-Mail-Adresse oder Kontaktformular-Link]</p>


        <br />
        <p className="medium bold">
7. SSL-Verschlüsselung</p>
        <p className="small">
Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte
Verbindung erkennen Sie am Schloss-Symbol in Ihrer Browserzeile.</p>


        <br />
        <p className="medium bold">8. Änderungen dieser Datenschutzerklärung</p>
        <p className="small">
Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets
den aktuellen rechtlichen Anforderungen entspricht.</p>

{/* 
        <br />
        <p className="medium"></p>
        <p className="small"></p>


        <br />
        <p className="medium"></p>
        <p className="small"></p> */}

      </div>



        <br /><br /><br /><br /><br />
    <Footer />

    </div>
  )
}

export default page