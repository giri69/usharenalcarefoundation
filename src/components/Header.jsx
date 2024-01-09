import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  return (
    <header>
         <div className='banner'>
            <div className='promobannerContainer'>
            <svg viewBox="0 0 46 26" className="my-svg">
      <g stroke="currentColor" fill="none">
        <path d="M8.72,21.91H8.11S5.18,6.91,18.18,7a12.49,12.49,0,0,1-.52,8.52"></path>
        <path d="M8.25,22.25s3.82-5.67,9.08-6.67c2.61-.5,5.58.15,8.61,3.21C25.94,18.79,16.7,30.77,8.25,22.25Z"></path>
        <path d="M8.11,21.92s-3,2-8,0"></path>
        <path d="M33.15,13s-1,2-5,1"></path>
        <path d="M8.7,22.62C17.33,15.36,26.12,19,26.12,19"></path>
        <path d="M16,18.83s-1.19,3.54,3,5.35"></path>
        <path d="M19.13,18S18,20.61,21.55,22.8"></path>
        <path d="M23.13,18s-1.41,2.11.78,3.06"></path>
        <path d="M12.62,19.94s-.91,2.52,2.28,5.27"></path>
        <path d="M33.08,13.18S48.38,13.05,45.72.33C45.72.33,30.63,1.44,33.08,13.18Z"></path>
        <path d="M45.65.06S43.84,9.41,33,12.6"></path>
        <path d="M40.2,8.62s-3.62-1-2.83-5.42"></path>
        <path d="M42.65,6.46S39.83,5.94,40,1.78"></path>
        <path d="M44.84,3.11s-2.54,0-2.12-2.34"></path>
        <path d="M37.42,10.81s-2.6-.63-3.14-4.81"></path>
        <path d="M18.18,7s-8.8,4.81-9.45,14.88"></path>
      </g>
    </svg>
                    <div className='bannerContent'>
                     <p>Founded on 23rd March 2021. Join Us Today!</p>
                    </div>
                    <svg viewBox="0 0 66 18" className="my-svg1">
      <g stroke="currentColor" fill="none">
        <path d="M4.878 4.914s10.908 10.723 18.027-.155c0 0-11.458-9.887-18.027.155zM23.044 4.519S15.153 9.85 5.25 4.459M13.139 6.72s-1.88-3.234 1.829-5.836M16.398 6.93s-1.631-2.365 1.406-5.222M20.312 6.111s-1.807-1.783.156-3.157M9.626 6.302S8.23 4.013 10.802.679M5.035 4.854s-2.124.699-4.23-2.846"></path>
        <path d="M52.08 16.182s15.296-.13 12.638-12.856c0 0-15.093 1.11-12.638 12.856zM64.647 3.057s-1.81 9.35-12.625 12.541M59.199 11.618s-3.615-.957-2.833-5.42M61.652 9.462s-2.825-.518-2.698-4.686M63.841 6.115s-2.539.017-2.122-2.342M56.42 13.806s-2.605-.632-3.145-4.808M52.15 16.029s-1.008 1.996-5.004.979"></path>
      </g>
    </svg>
            </div>
        
        </div>
     <div className="header-text">
       
       
        <h3>USHA RENAL CARE FOUNDATION</h3>
      </div>
      <Navbar bg="light" expand="lg" expanded={expanded} onSelect={() => setExpanded(false)}>
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav onSelect={handleNavItemClick}>
            <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">CONTACT US</Nav.Link>
            <Nav.Link as={Link} to="/more" className="nav-link">GITEX DUBAI, UAE 2021</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;
