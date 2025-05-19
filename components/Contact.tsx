import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='kontaktform'>
          <p className='title'><b style={{
            color: "#2555a1"
          }}>Kontaktieren</b> Sie uns!</p>
          <p className='contactText'>
            Sie haben Fragen oder möchten ein Projekt mit uns starten?
            <br/>
            Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich
          </p>
          <div className='contactContainer'>
            <div className='contactImage'>
              <Image src="/uberuns/contactImg.svg" width={20} height={20} alt="contact" className='img' />
            </div>
            <div className="contact-form">
              <form>
                <p>Name</p>
                <input type="text" id="name" placeholder="Geben Sie Ihren vollständigen Namen ein" />
                <p>Email</p>
                <input type="email" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
                <p>Nachricht</p>
                <input type="text" id="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
                <button type="submit">Senden Sie Ihre Nachricht</button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Contact