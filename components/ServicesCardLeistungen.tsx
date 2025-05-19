import Image from 'next/image'
import React from 'react'

const services = [
  {
    icon: '/homepagegrid/maingrid1.svg',
    title: 'Gerüstbau',
    description: 'Beim Gerüstbau setzen wir auf Sicherheit, Stabilität und fachgerechte Montage. Unsere Gerüste bieten die ideale Arbeitsgrundlage für alle Gewerke – vom Fassadenbau bis zur Dachsanierung. Dabei achten wir auf schnelle Auf- und Abbauten, individuelle Anpassungen und höchste Sicherheitsstandards. So sorgen wir für einen reibungslosen Ablauf auf jeder Baustelle.',
    isHighlighted: true,
  },
  {
    icon: '/homepagegrid/maingrid2.svg',
    title: 'Altbausanierung',
    description: 'Die Sanierung von Altbauten erfordert viel Erfahrung und Fingerspitzengefühl. Unser Ziel ist es, den ursprünglichen Charakter eines Gebäudes zu bewahren und gleichzeitig moderne Standards in Energieeffizienz, Sicherheit und Komfort zu integrieren. Von der Fassadeninstandsetzung bis zur Innenraumgestaltung bieten wir durchdachte Lösungen. Jedes Sanierungsprojekt führen wir mit größter Sorgfalt und Respekt gegenüber der bestehenden Bausubstanz aus.',
  },
  {
    icon: '/homepagegrid/maingrid3.svg',
    title: 'Putzarbeiten',
    description: 'Unsere Putzarbeiten sorgen nicht nur für ein ästhetisches Erscheinungsbild, sondern erfüllen auch funktionale Zwecke wie Feuchtigkeitsregulierung und Wärmeschutz. Ob Reibeputz, Glattputz oder Strukturputz – wir bieten vielfältige Techniken für innen und außen. Durch präzise Ausführung und hochwertige Materialien garantieren wir langlebige und gleichmäßige Oberflächen. Dabei gehen wir stets auf die individuellen Anforderungen Ihres Projekts ein.',
  },
  {
    icon: '/homepagegrid/maingrid4.svg',
    title: 'Vollwärmeschutz',
    description: 'Ein professionell angebrachtes Wärmedämmverbundsystem (WDVS) verbessert die Energieeffizienz Ihres Gebäudes erheblich. Durch reduzierte Wärmeverluste sparen Sie nicht nur Heizkosten, sondern leisten auch einen aktiven Beitrag zum Klimaschutz. Wir beraten Sie umfassend zur Auswahl des passenden Dämmmaterials und sorgen für eine fachgerechte Ausführung. So bleibt Ihr Zuhause im Winter warm und im Sommer angenehm kühl.',
  },
  {
    icon: '/homepagegrid/maingrid5.svg',
    title: 'Trockenbau',
    description: 'Unsere Malerarbeiten verleihen Wänden und Fassaden neues Leben. Wir arbeiten mit hochwertigen, umweltfreundlichen Farben und bieten ein breites Spektrum an Techniken und Farbkonzepten. Egal ob Innenräume, Fassaden oder dekorative Oberflächen – wir sorgen für saubere Ausführung, gleichmäßige Ergebnisse und langlebige Wirkung. So entsteht eine Atmosphäre, in der man sich wohlfühlt.',
  },
  {
    icon: '/homepagegrid/maingrid6.svg',
    title: 'Malerarbeiten',
    description: 'Trockenbau bietet vielseitige Möglichkeiten zur Raumaufteilung und Gestaltung – schnell, sauber und kosteneffizient. Ob Trennwände, Deckenabhängungen oder Schallschutzlösungen – wir planen und realisieren maßgeschneiderte Konstruktionen. Mit präziser Ausführung und hochwertigen Materialien schaffen wir funktionale und optisch ansprechende Ergebnisse. Ideal für Neubauten, Umbauten oder Renovierungen.',
  },
]

const ServicesCardLeistungen = () => {
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

export default ServicesCardLeistungen