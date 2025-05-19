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
                    Projekt Gesundheitscampus <b>Calw</b> - 6.200 m² WDVS für moderne Gesundheitsarchitektur.
                    </>
                }
                description="Ein umfassendes Fassadenprojekt am Gesundheitscampus mit vielfältigen Putz- und Dämmarbeiten – aktuell im Bau."
                imageSrc="/projects/calw/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Am Gesundheitscampus Calw, Mildred-Scheel-Straße, realisiert die Destani Maler GmbH aktuell ein anspruchsvolles Neubauprojekt: das neue Krankenhaus Calw. Ziel ist es, eine energieeffiziente und langlebige Fassadenlösung für das moderne Gesundheitsgebäude zu schaffen. Das Projekt befindet sich derzeit im Bau.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b><br />
                    Ein <b>Wärmedämmverbundsystem</b> wird auf einer Fläche von <b>6.200 m²</b> installiert, um das Gebäude optimal gegen Wärmeverluste zu schützen und energetischen Standards im Gesundheitswesen gerecht zu werden.
                    </>,
                    <>
                    <b>Putz- und Strukturarbeiten:</b> Zur Gestaltung der Fassadenflächen werden <b>3.500 m²</b> Putz mit 2mm Körnung aufgetragen. Zusätzlich werden <b>300 m² Kammzug und 2.400 m² Besenzug-Flächen</b> verarbeitet - diese Putztechniken verleihen der Fassade Struktur, Charakter und Widerstandsfähigkeit.
                    <br /><br />
                    <b>Fensterbank- und Jalousienmontage:</b><br />
                    Es werden <b>675 laufende Meter Fensterbänke</b> installiert sowie <b>451 Jalousienkästen</b> verbaut - beides essenzielle Bestandteile für Funktionalität, Wetterbeständigkeit und modernes Erscheinungsbild.
                    </>,
                ]}
                images={[
                    '/projects/calw/1.jpg',
                    '/projects/calw/2.jpg',
                    '/projects/calw/3.jpg',
                    '/projects/calw/4.jpg',
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