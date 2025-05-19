import React from 'react'
import Image from 'next/image'

type HeroProps = {
  heading: React.ReactNode
  description: string
  imageSrc: string
}

const Hero = ({ heading, description, imageSrc }: HeroProps) => {
  return (
    <div>
      <p className="heroText">{heading}</p>
      <p>{description}</p>
      <Image src={imageSrc} width={1} height={1} alt="Hero Section" className='heroImage' />
    </div>
  )
}

export default Hero