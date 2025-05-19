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
            <Hero
                heading={
                    <>
                    Unsere <b>Projekte</b> – <b>Ergebnisse</b>, die für sich <b>sprechen</b>
                    </>
                }
                description="Ein Einblick in unsere Arbeit: professionell ausgeführt, dauerhaft überzeugend."
                imageSrc="/projekte/Video.svg"
            />
            <ProjekteGrid />
            <Contact />
        </div>
        <Footer />
        <SlideBar />
    </div>
  )
}

export default page