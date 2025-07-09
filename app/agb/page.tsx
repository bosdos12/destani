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

        <p className="large bold">Allgemeine Geschäftsbedingungen (AGB)</p>
        <br />
        <p className="medium bold">Malerbetrieb Destani GmbH</p>

        <br />
        <p className="medium bold">1. Geltungsbereich</p>
        <p className="small">Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Geschäftsbeziehungen
zwischen der Malerbetrieb Destani GmbH, vertreten durch die Geschäftsführung, und
unseren Kunden, soweit nicht ausdrücklich schriftlich etwas anderes vereinbart wurde.</p>


        <br />
        <p className="medium bold">2. Vertragsabschluss</p>
        <p className="small">Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst mit unserer
schriftlichen Auftragsbestätigung oder durch tatsächliche Ausführung der Leistungen
zustande. Nebenabreden und Änderungen bedürfen der schriftlichen Bestätigung.</p>

        <br />
        <p className="medium bold">3. Leistungen</p>
        <p className="small">Wir bieten professionelle Leistungen im Bereich Malerarbeiten,
Wärmedämmverbundsysteme (WDVS), Fassadensanierung, Innenausbau sowie verwandte
handwerkliche Tätigkeiten an. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen
Angebot oder der Leistungsbeschreibung.</p>

        <br />
        <p className="medium bold">4. Preise und Zahlungsbedingungen</p>
        <p className="small">Alle angegebenen Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer.
Zahlungen sind, sofern nicht anders vereinbart, 10 Tage nach Rechnungsstellung ohne
Abzug fällig. Bei Zahlungsverzug behalten wir uns das Recht vor, Mahngebühren und
Verzugszinsen geltend zu machen.</p>

        <br />
        <p className="medium bold">5. Ausführung und Fristen</p>
        <p className="small">Ausführungsfristen gelten nur dann als verbindlich, wenn sie schriftlich bestätigt wurden.
Verzögerungen durch höhere Gewalt, ungünstige Witterungsverhältnisse oder fehlende
Mitwirkung des Auftraggebers berechtigen uns zu einer angemessenen Fristverlängerung.</p>

        <br />
        <p className="medium bold">6. Abnahme und Gewährleistung</p>
        <p className="small">Nach Beendigung der Arbeiten erfolgt eine gemeinsame Abnahme. Etwaige Mängel sind
spätestens innerhalb von 7 Tagen schriftlich anzuzeigen. Für unsere Leistungen gelten die
gesetzlic</p>

        <br />
        <p className="medium bold">7. Haftung</p>
        <p className="small">Für Schäden haften wir nur bei Vorsatz oder grober Fahrlässigkeit. Bei einfacher
Fahrlässigkeit ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
Eine Haftung für Folgeschäden oder entgangenen Gewinn ist ausgeschlossen, soweit
gesetzlich zulässig.</p>

        <br />
        <p className="medium bold">8. Eigentumsvorbehalt</p>
        <p className="small">Alle gelieferten Materialien bleiben bis zur vollständigen Bezahlung Eigentum der
Malerbetrieb Destani GmbH.</p>

        <br />
        <p className="medium bold">9. Datenschutz</p>
        <p className="small">Personenbezogene Daten werden ausschließlich zur Auftragsabwicklung und gemäß
unserer Datenschutzerklärung verarbeitet.</p>

        <br />
        <p className="medium bold">10. Schlussbestimmungen</p>
        <p className="small">Erfüllungsort und Gerichtsstand ist unser Firmensitz, sofern gesetzlich zulässig. Es gilt
ausschließlich deutsches Recht.
Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein, so bleibt die
Wirksamkeit der übrigen Bestimmungen unberührt.</p>

      </div>



        <br /><br /><br /><br /><br />
    <Footer />

    </div>
  )
}

export default page