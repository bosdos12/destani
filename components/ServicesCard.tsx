import Image from 'next/image'
import React from 'react'

const services = [
  {
    icon: '/homepagegrid/maingrid1.svg',
    title: 'Gerüstbau',
    description: 'Sichere und stabile Gerüstlösungen für jedes Bauvorhaben.',
    isHighlighted: true,
  },
  {
    icon: '/homepagegrid/maingrid2.svg',
    title: 'Altbausanierung',
    description: 'Wir bringen alte Gebäude technisch und optisch auf den neuesten Stand.',
  },
  {
    icon: '/homepagegrid/maingrid3.svg',
    title: 'Putzarbeiten',
    description: 'Hochwertige Innen- und Außenputze für ein perfektes Oberflächenbild.',
  },
  {
    icon: '/homepagegrid/maingrid4.svg',
    title: 'Vollwärmeschutz',
    description: 'Effiziente Wärmedämmung für nachhaltige Energiekonzepte.',
  },
  {
    icon: '/homepagegrid/maingrid5.svg',
    title: 'Trockenbau',
    description: 'Flexible Raumgestaltung mit modernen Trockenbausystemen.',
  },
  {
    icon: '/homepagegrid/maingrid6.svg',
    title: 'Malerarbeiten',
    description: 'Professionelle Anstriche für ein frisches und stimmiges Raumgefühl.',
  },
]

const ServicesCard = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div
          className={`service-card ${service.isHighlighted ? 'highlighted' : ''}`}
          key={index}
        >
          <Image src={service.icon} alt={service.title} width={40} height={40} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesCard