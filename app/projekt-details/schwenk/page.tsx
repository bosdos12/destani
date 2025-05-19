import { Footer, Header, ProjectDescription, SlideBar } from '@/components'
import Hero from '@/components/Hero'
import React from 'react'
import "../page.css"
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div>
        <Header
            activeButtonList={["", "", "", "active"]}
        />
        <div className='container'>
            <Hero
                heading={
                    <>
                        Projekt <b>Schwenk</b> - 1.600 m² WDVS und schwarze Fassadengestaltung in Fellbach
                    </>
                }
                description="Fassadenarbeiten für den Verwaltungs- und Produktionsneubau mit besonderem Fokus auf Design und Funktionalität."
                imageSrc="/projects/schwenk/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Im Rahmen der Erweiterung der Produktions- und Verwaltungsgebäude an der Esslinger Straße in Fellbach wurde die Destani Maler GmbH mit der Ausführung der Fassadenarbeiten beauftragt. Der Fokus lag auf Energieeffizienz, klarer Linienführung und einem modernen Erscheinungsbild in markantem Schwarz.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b>
                    Ein <b>Wärmedämmverbundsystem</b> wurde auf einer Fläche von <b>1.600 m²</b> fachgerecht angebracht. Diese Maßnahme verbessert die energetische Bilanz des Gebäudes und sorgt für nachhaltige Dämmleistung im Industrie- und Verwaltungsbereich.
                    </>,
                    <>
                    <b>Schwarze Fassadengestaltung:</b>
                    Die gesamte Fassade wurde in einem modernen, schwarzen Design umgesetzt - ebenfalls auf <b>1.600 m² Fläche</b>. Diese Farbwahl unterstreicht die architektonische Klarheit und den hochwertigen Charakter des Neubaus.
                    <br /><br />
                    <b>Fensterbankmontage</b>
                    Zur funktionalen Ergänzung wurden <b>175 laufende Meter Fensterbänke</b> installiert, die sowohl das Fassadenbild abrunden als auch den Witterungsschutz an den Fensteranschlüssen gewährleisten.
                    </>,
                ]}
                images={[
                    '/projects/schwenk/1.jpg',
                    '/projects/schwenk/2.jpg',
                    '/projects/schwenk/3.jpg',
                    '/projects/schwenk/4.jpg',
                ]}
            />

            <Contact />
        </div>
        <Footer />
        <SlideBar />
    </div>
  )
}

export default page