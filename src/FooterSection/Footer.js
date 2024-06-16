import React from 'react'
import {Hashlink as Link} from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
export const Footer = () => {
  return (
    <div className='main-footer bg-dark '>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-3' >
           <div className='footer1'>
           <p>city Pune
              <br/>
              +91 8668253350
              <br/>
              gaurav1997.pandey@gmail.com
           </p>  
           </div>
        </div>
        <div className='col-lg-3' >
                <div className='footer2'>
                <p>Home
                <br/>
                Aboutme
                <br/>
                Work</p> 
                </div>  
        </div>
        <div className='col-lg-3' >
                 <div className='footer3'>
                <p>
                    Resume<br/>
                    Contacts
                </p> 
                </div>
        </div>
        <div className='col-lg-3' >
            <div className='footicon'>
           <a href='https://www.facebook.com/gaurav.rambo.7' className=''><FontAwesomeIcon icon={faFacebook}/></a>
            <a href='mailto:gaurav1997.pandey@gmail.com' className=''><FontAwesomeIcon icon={faEnvelope}/></a>
           <a href='tel:8668253350' className=''><FontAwesomeIcon icon={faWhatsapp}/></a>
           <a href='https://www.instagram.com/kumar_gaurav_7/' className=''><FontAwesomeIcon icon={faInstagram}/></a>
           <a href='https://twitter.com/GauravP84211764' className=''><FontAwesomeIcon icon={faTwitter}/></a>
           </div>
        </div>
      </div>

      </div>
    </div>
  )
}
