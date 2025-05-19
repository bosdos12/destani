import React from 'react'
import Image from 'next/image'

type ProjectDescriptionProps = {
  title: string
  paragraphs: React.ReactNode[]
  images: string[]
}

const ProjectDescription = ({ title, paragraphs, images }: ProjectDescriptionProps) => {
  return (
    <div className="projectDescription">
      <h2 className="projectTitle">{title}</h2>
      <div className="projectText">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="projectImagesGrid">
        {images.map((src, i) => (
          <div key={i} className="imageWrapper">
            <Image src={src} alt={`project image ${i + 1}`} width={400} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDescription