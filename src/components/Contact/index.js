import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
      setTimeout(() => {
      return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_zl9bkxh', 'template_mchtajk', refForm.current, 'YWW1jU3Bn4UrIqxDl')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    return ( 
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>
            <div className='info-map'>
                Darpan Sarda,
                <br />
                India,
                <br />
                Arya Samaj Road <br />
                Jamnagar <br />
                <span>darpansarda7@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[22.45941199694067, 70.06999067767997]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[22.45941199694067, 70.06999067767997]}>
                        <Popup>Darpan Lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact