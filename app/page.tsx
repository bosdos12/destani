import { Footer, Header, LandingPageVideoBanner, LandingTitleContainer, SlideBar } from "@/components";
import Image from "next/image";

export default function Home() {

  return (
    <div className="page_container">
      
      <Header />

      <LandingTitleContainer />

      <LandingPageVideoBanner />

      <div className="title_and_subtext_container">
        <p className="very-large bold">
          Unsere <span style={{color: "#2555a1"}}>Putz</span>- und <br />
          <span style={{color: "#2555a1"}}>Sanierungsarbeiten</span>
        </p>
        <br />
        <p className="medium gray">
          Mit Liebe zum Detail und echter Handwerkskunst gestalten wir Innenräume <br />
          und Fassaden - zuverlässig, stilvoll und nachhaltig.
        </p>
      </div>
      {/* GRID AREA */}



      <div className="title_and_subtext_container">
        <p className="very-large bold">
          Räume mit <span style={{color: "#2555a1"}}>Handwerkskunst</span> formen -<br/>
          das ist unsere <span style={{color: "#2555a1"}}>Leidenschaft</span>
        </p>
        <br />
        <p className="medium gray">
          Mit jahrzehntelanger Erfahrung in Putz-, Stuck- und Sanierungsarbeiten verbinden wir Tradition mit Präzision -<br/>
          für langlebige und ästhetische Lebensräume.
        </p>
      </div>
      {/* Missionvision */}



      <div className="title_and_subtext_container">
        <p className="very-large bold">
          Unsere Projekte - <span style={{color: "#2555a1"}}>Qualität</span>,<br/>
          die <span style={{color: "#2555a1"}}>sichtbar wird</span>
        </p>
        <br />
        <p className="medium gray">
          Werfen Sie einen Blick auf eine Auswahl unserer abgeschlossenen Arbeiten.<br/>
          Jedes Projekt steht für handwerkliches Können, Liebe zum Detail und zuverlässige Ausführung.
        </p>
      </div>
      {/* PROJECTS AREA */}


      <div className="title_and_subtext_container">
        <p className="very-large bold">
          <span style={{color: "#2555a1"}}>Kontaktieren</span> Sie uns!
        </p>
        <br />
        <p className="medium gray">
          Sie haben Fragen oder möchten ein Projekt mit uns starten?<br/>
          Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich
        </p>
      </div>
      {/* Contact Form */}




      <Footer />

      <SlideBar />

    </div>
  );
}
