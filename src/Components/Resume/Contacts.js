import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css";
import { Footer } from '../../FooterSection/Footer';


export const Contacts = () => {
  return (
    <>
    <div className='mainclass mt-5 ' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='headingclass text-center'>
            <h2>Contact</h2>
            <div className='subheading'>
              <h6>Get in touch</h6>
              {/* <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> */}
              {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              
                
                <div className='iconclass'>
                  <div className='address'>
                  <a className='fs-1 icon1 '><FontAwesomeIcon icon={faLocationDot} /></a>
                    <h6>Address :</h6>
                  
                   <p>Pune Maharashtra</p>
                  </div>
                  <div className='address2'>
                  <a className='fs-1'><FontAwesomeIcon icon={faEnvelope} /></a>
                    
                    <p>gaurav1997.pandey@gmail.com
                    <br/>
                    kumar.gaurav@mitaoe.ac.in</p>
                  </div>

                  <div className='address3'>
                  <a className='fs-1'><FontAwesomeIcon icon={faPhone} /></a>
                    <p>+91 8668253350
                    <br/>
                    +91 8390815355</p>
                  </div>

                  <div className='address4'>
                  <a className='fs-1'><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <p>8668253350</p>
                  </div>
                  
                
              </div>
            </div>
              
              


            <div className='col-lg-6 col-md-6 '>
            <div className='forms '>
               <form action='https://formspree.io/f/xqkonkod' method='POST'>
              <div class="mb-3 px-4 pt-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" name='name' id="exampleFormControlInput1" placeholder="name"/>
              </div>
              <div class="mb-3 px-4">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3 px-4 pb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
               <div className='btn mb-3 px-4 ms-auto'>
                <input type='submit' value='Send' className='btnsub ms-auto'/>
               </div>
               </form>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
    
    </>
  )
}
