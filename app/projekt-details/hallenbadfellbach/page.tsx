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
                    Projekt <b>Hallenbad Fellbach</b> – Fassadengestaltung mit Qualität
                    </>
                }
                description="Modernes Wohnprojekt mit hochwertigen Fassadenarbeiten und kompletten Malerarbeiten."
                imageSrc="/projects/hallenbadfellbach/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Beim Projekt <b>Hallenbad Fellbach</b> übernahm Destani Maler GmbH die umfassende
                    Fassadensanierung und -gestaltung. Im Fokus standen sowohl energetische als auch optische
                    Verbesserungen der Gebäudehülle.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b> Ein <b>Wärmedämmverbundsystem (WDVS)</b> wurde auf einer Fläche von{' '}
                    <b>7.100 m²</b> fachgerecht angebracht. Diese Maßnahme trägt erheblich zur
                    Energieeffizienz und Dämmleistung des Gebäudes bei und erfüllt moderne energetische
                    Standards.
                    </>,
                    <>
                    <b>Klinkerarbeiten:</b> Zusätzlich wurden <b>960 m² Klinkerflächen</b> verarbeitet. Die
                    Klinker sorgen für eine robuste und ansprechende Fassadengestaltung, die sowohl langlebig
                    als auch pflegeleicht ist und dem Hallenbad ein modernes Erscheinungsbild verleiht.
                    </>,
                ]}
                images={[
                    '/projects/hallenbadfellbach/1.jpg',
                    '/projects/hallenbadfellbach/2.jpg',
                    '/projects/hallenbadfellbach/3.jpg',
                    '/projects/hallenbadfellbach/4.jpg',
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