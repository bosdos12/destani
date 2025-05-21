import React from 'react'
import Image from 'next/image'

const InfoCards = () => {
  return (
    <div className='infoCards'>
        <div className='cards'>
          <Image src="/uberuns/Vector.svg" width={50} height={50} alt="Unsere Mission" className='icon' />
          <p className='title'>Unsere <b>Mission</b></p>
          <p className='description'>
            Wir schaffen langlebige Lösungen mit handwerklicher Präzision. Unser Ziel ist es, Räume zu verschönern und Werte zu erhalten
          </p>
        </div>
        <div className='cards'>
          <Image src="/uberuns/icon2.svg" width={50} height={50} alt="Unsere Team" className='icon' />
          <p className='title'>Unsere <b>Team</b></p>
          <p className='description'>
            Unser starkes Team aus ausgebildeten Stuckateuren und erfahrenen Bauleitern meistert Projekte jeder Größe - unterstützt durch ein zuverlässiges Netzwerk aus Spezialisten und Partnern.
          </p>
        </div>
        <div className='cards'>
          <Image src="/uberuns/icon3.svg" width={50} height={50} alt="Unsere Werte" className='icon' />
          <p className='title'>Unsere <b>Mission</b></p>
          <p className='description'>
            Wir stehen für Verlässlichkeit, Sauberkeit und Qualität. Echte Leidenschaft fürs Handwerk treibt uns täglich an
          </p>
        </div>
        <div className='cards'>
          <Image src="/uberuns/Vector.svg" width={50} height={50} alt="Unsere Arbeitsweise" className='icon' />
          <p className='title'>Unsere <b>Mission</b></p>
          <p className='description'>
            Ob Neubau, Altbau oder Sanierung – wir realisieren jedes Projekt mit höchster Sorgfalt und einem klaren Fokus auf Qualität.
          </p>
        </div>
      </div>
  )
}

export default InfoCards