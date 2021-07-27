import React from 'react';
import Navigation from '../Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Team from './Team/Team';
import Technologies from './Technology/Technologies';

const Header = () =>{
    return(
        <>
        <Navigation/>
        <Home />
        <About />
        <Technologies />
        <Team/>
        <Contact/>
        </>
    )
}

export default Header