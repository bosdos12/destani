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
            Wir schaffen langlebige Lösungen mit handwerklicher Präzision. Unser Ziel ist es, Räume zu verschönern und Werte zu erhalten
          </p>
        </div>
        <div className='cards'>
          <Image src="/uberuns/icon3.svg" width={50} height={50} alt="Unsere Mission" className='icon' />
          <p className='title'>Unsere <b>Mission</b></p>
          <p className='description'>
            Wir schaffen langlebige Lösungen mit handwerklicher Präzision. Unser Ziel ist es, Räume zu verschönern und Werte zu erhalten
          </p>
        </div>
        <div className='cards'>
          <Image src="/uberuns/Vector.svg" width={50} height={50} alt="Unsere Mission" className='icon' />
          <p className='title'>Unsere <b>Mission</b></p>
          <p className='description'>
            Wir schaffen langlebige Lösungen mit handwerklicher Präzision. Unser Ziel ist es, Räume zu verschönern und Werte zu erhalten
          </p>
        </div>
      </div>
  )
}

export default InfoCards