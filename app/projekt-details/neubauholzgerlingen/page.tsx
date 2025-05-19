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
                        Projekt <b>Neubau Holzgerlingen</b> - 5.100 m² WDVS & 1.120 m² Klinker Wohn- und Geschäftshaus
                    </>
                }
                description="Hochwertige Fassadenarbeiten an der Werastraße 34 mit Fokus auf Energieeffizienz und architektonischem Anspruch."
                imageSrc="/projects/neubauholzgerlingen/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Im Projekt <b>Neubau Werastraße 34, 71088 Holzgerlingen</b> war die Destani Maler GmbH für die Ausführung der Fassadenarbeiten an einem kombinierten Wohn- und Geschäftshaus verantwortlich. Ziel war es, durch moderne Dämmung und hochwertige Gestaltungselemente ein energieeffizientes und visuell ansprechendes Gebäude zu realisieren.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b>
                    Ein <b>Wärmedämmverbundsystem</b> wurde auf <b>5.100 m²</b> Fassadenfläche angebracht. Es sorgt für optimale Energieeffizienz, Wohnkomfort und langfristigen Schutz der Bausubstanz.
                    </>,
                    <>
                    <b>Klinkerarbeiten:</b>
                    Zur architektonischen Aufwertung der Fassade wurden <b>1.120 m²</b> Klinker verarbeitet. Die robuste Verblendung bietet nicht nur Schutz vor Witterungseinflüssen, sondern verleiht dem Gebäude einen modernen und hochwertigen Charakter.
                    </>,
                ]}
                images={[
                    '/projects/neubauholzgerlingen/1.jpg',
                    '/projects/neubauholzgerlingen/2.jpg',
                    '/projects/neubauholzgerlingen/3.jpg',
                    '/projects/neubauholzgerlingen/4.jpg',
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