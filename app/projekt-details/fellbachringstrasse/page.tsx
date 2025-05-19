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
                    Projekt <b>Fellbach Ringstraße</b> - 6.150 m² WDVS für nachhaltige Modernisierung
                    </>
                }
                description="In Kombination mit 700 m² Klinker und über 6.000 m² Gerüst entstand ein ganzheitlich saniertes Objekt."
                imageSrc="/projects/fellbachringstrasse/bannervid.mp4"
                isVideo
            />
            <ProjectDescription
                title="Projektbeschreibung"
                paragraphs={[
                    <>
                    Beim Projekt Fellbach Ringstraße wurde die Destani Maler GmbH mit der energetischen und optischen Erneuerung der Fassade eines größeren Wohn- oder Gewerbekomplexes beauftragt. Die Arbeiten wurden fachgerecht, termingetreu und mit höchster Sorgfalt durchgeführt.
                    </>,
                    <>
                    <b>WDVS-Arbeiten:</b><br />
                    Ein <b>Wärmedämmverbundsystem (WDVS)</b> wurde auf einer Fläche von <b>6.150 m²</b> angebracht. Dadurch konnte der energetische Standard des Gebäudes deutlich verbessert und ein nachhaltiger Beitrag zur Reduktion des Energieverbrauchs geleistet werden.
                    </>,
                    <>
                    <b>Klinkerarbeiten:</b><br />
                    Für die optische Veredelung der Fassade wurden <b>700 m² Klinker</b> verarbeitet. Die Klinker sorgen für eine hochwertige, langlebige und pflegeleichte Außenfassade mit architektonischem Charakter.Für die optische Veredelung der Fassade wurden 700 m² Klinker verarbeitet. Die Klinker sorgen für eine hochwertige, langlebige und pflegeleichte Außenfassade mit architektonischem Charakter.
                    <br /><br />
                    <b>Gerüstarbeiten:</b><br />
                    Um sämtliche Arbeiten sicher und effizient ausführen zu können, wurden insgesamt <b>6.230 m²</b> Gerüstfläche gestellt. Das professionelle Gerüst ermöglichte einen reibungslosen Ablauf der Arbeiten in allen Höhenlagen.
                    
                    </>,
                ]}
                images={[
                    '/projects/fellbachringstrasse/1.jpg',
                    '/projects/fellbachringstrasse/2.jpg',
                    '/projects/fellbachringstrasse/3.jpg',
                    '/projects/fellbachringstrasse/4.jpg',
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