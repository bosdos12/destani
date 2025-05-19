"use client"
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Hallenbad Fellbach',
    location: 'Projekt 1',
    description: 'Sanierung und Fassadengestaltung des Hallenbads Fellbach mit WDVS - und Klinkerarbeiten. BV : NB 5 MFH mit 59 WE , Schillerstraße 70734 Fellbach. ',
    image: '/projekte/projekte1.svg',
    projectLink: "/projekt-details/hallenbadfellbach"
  },
  {
    id: 2,
    title: 'Fellbach Ringstraße',
    location: 'Projekt 2',
    description: 'Fassadensanierung an der Fellbach Ringstraße mit WDVS-, Klinker- und Gerüstarbeiten auf mehreren tausend Quadratmetern. BV: MFH mit 60 WE, Ringstraße 6 Fellbach.',
    image: '/projekte/projekte2.svg',
    projectLink: "/projekt-details/fellbachringstrasse"
  },
  {
    id: 3,
    title: 'Leonberg',
    location: 'Projekt 3',
    description: 'Fassadenarbeiten an der Tiga Römerstraße in Leonberg mit energetischer Sanierung durch WDVS und Klinkerverkleidung.BV: 7 MFH / 82 WE+8 GE, Tiga Römerstraße, Leonberg.',
    image: '/projekte/projekte3.svg',
    projectLink: "/projekt-details/leonberg"
  }
];

const ProjekteGridHome = () => {
  return (
    <div className="projectsGrid">
      {projects.map((proj) => (
        <div key={proj.id} className="card">
          <Image src={proj.image} width={500} height={300} alt={proj.title} className="cardImage" />
          <div className='Projcontent'>
          <p className="cardSubtitle">{proj.location}</p>
          <h3 className="cardTitle">{proj.title}</h3>
          <p className="cardDescription">{proj.description}</p>
          <button
            className="seeMore"
            onClick={() => window.location.href = proj.projectLink}>Mehr Sehen</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjekteGridHome;