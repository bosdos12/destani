import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Hallenbad Fellbach',
    location: 'Projekt 1',
    description: 'Sanierung und Fassadengestaltung des Hallenbads Fellbach mit WDVS- und Klinkerarbeiten. BV: NB 5 MFH mit 59 WE, Schillerstraße 70734 Fellbach.',
    image: '/projekte/projekte1.svg',
  },
  {
    id: 2,
    title: 'Fellbach Ringstraße',
    location: 'Projekt 2',
    description: 'Fassadensanierung an der Fellbach Ringstraße mit WDVS-, Klinker- und Gerüstarbeiten auf mehreren tausend Quadratmetern. BV: MFH mit 60 WE, Ringstraße 6 Fellbach.',
    image: '/projekte/projekte2.svg',
  },
  {
    id: 3,
    title: 'Leonberg',
    location: 'Projekt 3',
    description: 'Fassadenarbeiten an der Tiga Römerstraße in Leonberg mit energetischer Sanierung durch WDVS und Klinkerverkleidung.BV: 7 MFH / 82 WE+8 GE, Tiga Römerstraße, Leonberg.',
    image: '/projekte/projekte3.svg',
  },
  {
    id: 4,
    title: 'Gesundheitscampus Calw',
    location: 'Projekt 4',
    description: 'Ein umfassendes Fassadenprojekt am Gesundheitscampus mit vielfältigen Putz- und Dämmarbeiten – aktuell im Bau.Gesundheitscampus, Mildred-ScheelStraße, 75365 Calw',
    image: '/projekte/projekte4.svg',
  },
  {
    id: 5,
    title: 'Shwenk',
    location: 'Projekt 5',
    description: 'Fassaden- und Dämmarbeiten für den Erweiterungsbau der Firma Schwenk in Fellbach – mit markanter schwarzer Außenfassade. Schwenk-Erweiterung-Produktion-Verwaltung Esslinger Straße, Fellbach',
    image: '/projekte/projekte5.svg',
  },
  {
    id: 6,
    title: 'Bietigheim-Bissingen',
    location: 'Projekt 6',
    description: 'Fassadensanierung und -gestaltung an einem Wohnbauprojekt mit 18 Mehrfamilienhäusern in Bietigheim-Bissingen – inklusive WDVS, Klinker und Fensterbankmontage. 18MW Stuttgarter Straße 129, Bietigheim-Bissingen',
    image: '/projekte/projekte6.svg',
  },
  {
    id: 7,
    title: 'Korntal-Münchingen',
    location: 'Projekt 7',
    description: 'Umfassende Fassaden- und Gerüstarbeiten an mehreren Mehrfamilienhäusern im neuen Wohnviertel von Korntal-Münchingen.Y8 NB 4 MFH Dienkelstraße 2, 70825 KorntalMünchingen.',
    image: '/projekte/projekte7.svg',
  },
  {
    id: 8,
    title: 'Citybus Ulm',
    location: 'Projekt 8',
    description: 'Das Neubauprojekt Citybus in Ulm befindet sich aktuell in der Ausführung – mit energieeffizientem WDVS, modernen Verkleidungssystemen und Tiefgaragen-Dämmung.',
    image: '/projekte/projekte8.svg',
  },
  {
    id: 9,
    title: 'Neubau Holzgerlingen',
    location: 'Projekt 9',
    description: 'Komplette Fassadengestaltung für ein Wohn- und Geschäftshaus in Holzgerlingen mit energetischem WDVS und stilvoller Klinkerverblendung.',
    image: '/projekte/projekte9.svg',
  },
];

const ProjekteGrid = () => {
  return (
    <div className="projectsGrid">
      {projects.map((proj) => (
        <div key={proj.id} className="card">
          <Image src={proj.image} width={500} height={300} alt={proj.title} className="cardImage" />
          <div className='Projcontent'>
          <p className="cardSubtitle">{proj.location}</p>
          <h3 className="cardTitle">{proj.title}</h3>
          <p className="cardDescription">{proj.description}</p>
          <button className="seeMore">Mehr Sehen</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjekteGrid;