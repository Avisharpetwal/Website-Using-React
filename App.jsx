import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Programs from './components/Programs/Programs';
import Hero from './components/Hero/Hero';
import Title from './components/Title/Title';
import AboutComponent from './components/About/AboutComponent'; // Correct import name
import Campus from './components/Campus/Campus';
import Test from './components/Testimonials/Test';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='OUR PROGRAMS' title='What We Offer' />
        <Programs />
        <AboutComponent /> {/* Render AboutComponent instead of About */}
        <Title subtitle='GALLERY' title='Campus Photos' />
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says?' />
        <Test/>
        <Title subtitle='Contact Us' title='Get in touch' />
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App;
