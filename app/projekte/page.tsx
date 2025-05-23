import { Footer, Header, SlideBar } from '@/components'
import Hero from '@/components/Hero'
import React from 'react'
import "./page.css"
import ProjekteGrid from '@/components/ProjekteGrid'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <div>
        <Header
          activeButtonList={["", "", "", "active"]}
        />
        <div className='container'>


          <div className='heroContainer'>
            <div className="landing_title_container">
              <p className="xx-large">Unsere <b>Projekte</b> - <b>Ergebnisse</b>, die für sich <b>sprechen</b></p>
              <br />
              <p className="large gray">Ein Einblick in unsere Arbeit: professionell ausgeführt, dauerhaft überzeugend.</p>
            </div>
          </div>

          <div className="landingpage_video_banner">
            <video
              src="/projects/hallenbadfellbach/bannervid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="video_background"
            ></video>
          </div>


          <ProjekteGrid />
          <Contact />
        </div>
        <Footer />
        <SlideBar />
    </div>
  )
}

export default page