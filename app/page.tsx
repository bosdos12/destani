import { Header, LandingPageVideoBanner, LandingTitleContainer, SlideBar } from "@/components";
import Image from "next/image";

export default function Home() {

  return (
    <div className="page_container">
      
      <Header />

      <LandingTitleContainer />

      <LandingPageVideoBanner />


      <SlideBar />

    </div>
  );
}
