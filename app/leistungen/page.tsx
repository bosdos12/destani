import { Footer, Header , ServicesCardLeistungen, SlideBar } from '@/components'
import Contact from '@/components/Contact'
import React from 'react'
import "./page.css"
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div>
        <Header
          activeButtonList={["", "", "active", ""]}
        />
        <div className='container' style={{
          width: "100%"
        }}>
            <Hero
              heading={
                <>
                  <b>Leistungen</b>, die überzeugen – <b>Handwerk</b><br/> mit Qualität und Präzision
                </>
              }
              description="Von Putzarbeiten bis Trockenbau: Entdecken Sie, wie wir Räume gestalten und Werte schaffen."
              imageSrc="/smallbanner.webp"
            /> 
            <ServicesCardLeistungen />
            <Contact />
        </div>
        <Footer />
        <SlideBar />
    </div>
  )
}

export default page