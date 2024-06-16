import React, { Fragment } from 'react'
import { Header } from './Header'
import { Navbar } from './Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from './Home';
import { Aboutme } from './Aboutme';
import { Services } from './Services';
import Resumes from './Resume/Resumes';
import { Contacts } from './Resume/Contacts';
import { Particl } from './Resume/Particl';
import { Footer } from '../FooterSection/Footer';




export default function Apps() {
  return (
    <>
    
    <BrowserRouter>
    <Particl/>
    <Navbar/>
    
    <Header/>
    
    <Aboutme/>
    
    
    <Services/>
    
    <Resumes/>

    <Contacts/>
    <Footer/>
    <Routes>
    {/* <Route path='about' element={<Aboutme/>}/> */}

        {/* <Route path='home' element={<Home/>}/> */}
        {/* <Route path='services' element={<Services/>}/> */}
        
        
    </Routes>
    
    </BrowserRouter>
    
    
 </>
  )
}
