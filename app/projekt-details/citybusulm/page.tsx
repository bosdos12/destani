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
                    Projekt <b>Citybus Ulm</b> - 5.900 m² WDVS & 3.300 m² Meldorfer-System in Ausführung
                    </>
                }
                description="Fassadenarbeiten mit innovativen Materialien wie Tektalan, EPS und Keramikvliesen - derzeit im Bau am Breitensteinweg in Ulm."
                imageSrc="/projects/citybusulm/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Am <b>Breitensteinweg 17-31, 89075 Ulm</b> entsteht derzeit der <b>Neubau Citybus</b>, ein modernes Bauprojekt mit Tiefgarage. Die Destani Maler GmbH ist mit der Umsetzung der umfangreichen Fassadenarbeiten beauftragt. Das Projekt kombiniert hochwertige Dämm- und Gestaltungslösungen und befindet sich aktuell im Bau.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b>
                    Ein <b>Wärmedämmverbundsystem</b> auf <b>5.900 m²</b> Fläche bildet die Basis für Energieeffizienz und Langlebigkeit der Gebäudehülle.
                    </>,
                    <>
                    <b>Meldorfer-System:</b>
                    Für die Außenverkleidung werden <b>3.300 m²</b> des leichten und robusten Meldorfer-Systems verarbeitet - ideal für eine langlebige, moderne Ziegeloptik.
                    <br /><br />
                    <b>Keramikvliesen:</b><br />
                    <b>250 m²</b>  Keramikvliesen sorgen punktuell für hochwertige Akzente und setzen gestalterische Highlights in der Fassade
                    <br /><br />
                    <b>Sonderdämmung Tiefgarage:</b>
                    <br />
                    Im Bereich der Tiefgarage wird auf <b>1.400 m² Tektalan</b> (Holzwolle-Mineralfaser) sowie auf <b>1.200 m² EPS-Dämmung</b> gesetzt - für optimalen Wärme- und Brandschutz im unterirdischen Bereich.
                    </>,
                ]}
                images={[
                    '/projects/citybusulm/1.png',
                    '/projects/citybusulm/2.png',
                    '/projects/citybusulm/3.png',
                    '/projects/citybusulm/4.png',
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