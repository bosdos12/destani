import React from 'react'
import Image from 'next/image'

type HeroProps = {
  heading: React.ReactNode
  description: string
  imageSrc: string
  isVideo?: boolean;
}

const Hero = ({ heading, description, imageSrc, isVideo }: HeroProps) => {
  return (
    <div className='heroContainer'>
      <div className="landing_title_container">
        <p className="very-large">{heading}</p>
        <br />
        <p className="large gray">{description}</p>
      </div>

    

      {!isVideo ? (
        <Image src={imageSrc} width={1500} height={1500} alt="Hero Section" className='heroImage' />
      ) : (
        <div className="landingpage_video_banner">
          <video
            src={imageSrc}
            autoPlay
            loop
            muted
            playsInline
            className="video_background"
            ></video>
        </div>
    )}
      
    </div>
  )
}

export default Hero