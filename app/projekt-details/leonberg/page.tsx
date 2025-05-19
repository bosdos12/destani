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
                    Projekt <b>Leonberg</b> - 7.100 m² WDVS und 960 m² Klinker für moderne Fassadensanierung
                    </>
                }
                description="7 Mehrfamilienhäuser, 82 Wohneinheiten und 8 Gewerbeeinheiten energetisch und architektonisch aufgewertet."
                imageSrc="/projects/leonberg/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Im Projekt Leonberg übernahm Destani Maler GmbH die komplette Fassadengestaltung und Dämmung für ein Wohn- und Gewerbekomplex bestehend aus <b>7 Mehrfamilienhäusern, 82 Wohneinheiten und 8 Gewerbeeinheiten.</b> Die Arbeiten wurden nach höchsten Qualitätsstandards durchgeführt und zielten auf langfristige Energieeffizienz und architektonische Aufwertung ab.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b><br />
                    Ein <b>Wärmedämmverbundsystem</b> wurde auf einer Fläche von <b>7.100 m²</b> installiert. Diese Dämmmaßnahme sorgt für optimierte Energieeinsparung, erhöhten Wohnkomfort und langfristigen Schutz der Bausubstanz.
                    </>,
                    <>
                    <b>Klinkerarbeiten:</b><br />
                    Ergänzend wurden <b>960 m²</b> Klinker fachgerecht verarbeitet. Die robusten und witterungsbeständigen Klinker verleihen den Fassaden einen hochwertigen, modernen Look und sorgen für Langlebigkeit bei minimalem Wartungsaufwand.
                    </>,
                ]}
                images={[
                    '/projects/leonberg/1.png',
                    '/projects/leonberg/2.png',
                    '/projects/leonberg/3.png',
                    '/projects/leonberg/4.png',
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