import React from 'react'
import "./page.css"
import Image from 'next/image'
import { Hero1, InfoCards, Description, Header, SlideBar, Footer } from '@/components'
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';


const uberuns = () => {
  return (
    <div>
      <Header
        activeButtonList={["", "active", "", ""]}
      />
      <div className='container'>
        <Hero
          heading={
            <>
              Mit <b>Erfahrung</b> bauen, mit <b>Leidenschaft</b><br /> gestalten – das ist, was uns antreibt.
            </>
          }
          description="Seit 2002 stehen wir für echtes Handwerk, höchste Qualität und zuverlässige Umsetzung."
          imageSrc="/smallbanner.webp"
        />
        <InfoCards />
        <Image src="/smallbanner.webp" width={1500} height={1500} alt="uberuns" className='Image2' />
        <Description />
        <Contact />
      </div>
      <Footer />
      <SlideBar />
    </div>
  )
};

export default uberuns