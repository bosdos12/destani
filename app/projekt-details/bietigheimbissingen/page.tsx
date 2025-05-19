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
                    Projekt <b>Bietigheim-Bissingen</b> - 8.050 m² WDVS für moderne Wohnarchitektur
                    </>
                }
                description="Großprojekt an der Stuttgarter Straße mit umfassenden Fassadenarbeiten und stilvoller Klinkerverkleidung."
                imageSrc="/projects/bietigheimbissingen/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Im Projekt <b>18MW - Stuttgarter Straße 129, Bietigheim-Bissingen</b> übernahm Destani Maler GmbH die gesamte Ausführung der Fassadenarbeiten für einen großen Wohnkomplex mit 18 Mehrfamilienhäusern. Ziel war eine moderne, energieeffiziente und optisch hochwertige Gebäudehülle.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b>
                    Auf einer Fläche von <b>8.050 m²</b> wurde ein leistungsstarkes <b>Wärmedämmverbundsystem</b> (WDVS) angebracht. Diese Maßnahme gewährleistet hohe Energieeinsparung und schafft ein angenehmes Raumklima für die Bewohner.
                    </>,
                    <>
                    <b>Klinkerarbeiten:</b>
                    Ergänzend wurden <b>750 m² Klinker</b> verarbeitet, um der Fassade einen robusten und stilvollen Akzent zu verleihen. Die Kombination aus Putz und Klinker sorgt für eine architektonisch ausgewogene Gestaltung.
                    <br /><br />
                    <b>Fensterbankmontage:</b>
                    <br />
                    Insgesamt wurden <b>192 laufende Meter Fensterbänke</b> installiert. Sie dienen nicht nur dem Schutz der Fassade, sondern runden auch das Gesamtbild funktional und ästhetisch ab.
                    </>,
                ]}
                images={[
                    '/projects/bietigheimbissingen/1.jpg',
                    '/projects/bietigheimbissingen/2.jpg',
                    '/projects/bietigheimbissingen/3.jpg',
                    '/projects/bietigheimbissingen/4.jpg',
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