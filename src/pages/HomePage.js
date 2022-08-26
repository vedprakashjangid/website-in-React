import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Team from '../components/Team'
import Project from '../components/Project'


function HomePage() {
  return <> 
          <Navbar/>
          <About/>
          <Service/>
          <Team/>
          <Project/>

          <Footer/>
         </>

}

export default HomePage