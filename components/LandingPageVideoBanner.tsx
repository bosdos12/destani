import React from 'react'

const LandingPageVideoBanner = () => {
  return (
    <div className="landingpage_video_banner">
        <video
          src="/videos/fellbachringstrase.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video_background"
        ></video>
    </div>
  )
}

export default LandingPageVideoBanner