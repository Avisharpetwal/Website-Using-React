import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  // LOGIC FOR NAV BAR TURNING TRANSPARENT 
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  //---------------TOGGLING THE MENU ICON-------------------
  const [moblileMenu,setMobileMenu] = useState(false);
  const toggleMenu =()=>{
    moblileMenu? setMobileMenu(false):setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' /> 
      <ul className={moblileMenu?'':'hide-mobile-menu'}>
        <li className='navbtn'><Link to='hero' smooth={true} offset={0} duration={500} className='navbtn'>Home</Link></li>
        <li className='navbtn'><Link to='program' smooth={true} offset={-260} duration={500} className='navbtn'>Program</Link></li>
        <li className='navbtn'><Link to='about' smooth={true} offset={-150} duration={500} className='navbtn'>About Us</Link></li>
        <li className='navbtn'><Link to='campus' smooth={true} offset={-260} duration={500} className='navbtn'>Campus</Link></li>
        <li className='navbtn'><Link to='test' smooth={true} offset={-260} duration={500} className='navbtn'>Testimonials</Link></li>
        <li className='navbtn'><Link to='contact' smooth={true} offset={-260} duration={500} className='navbtn'>Contact US</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
