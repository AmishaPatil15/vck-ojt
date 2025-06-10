import React , {usestate} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Header.css';
const Header = () => {
    const [menuOpen, setMenuOpen]= useState(false);

    const toggleMenu = () => {
        setMenuOpen(menuOpen);
    };

    // const closeMenu = () => {
    //     setMenuOpen(false);
    // };
    return (
        <div>

         
        <header className="header">
            <div div className="header-container">
                <h1 className="logo">Vivekanand College</h1>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/admissions" className="apply-btn">Apply Now!</Link>
        
                </nav>
                <button className="hamburger" onClick={toggleMenu}>

                </button>
                </div>
            {/* <div>
                <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
                <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
                <Link to="/courses" onClick={closeMenu} className="mobile-link">Courses</Link>
                <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
                <Link to="/admissions" onClick={closeMenu} className="mobile-link">Apply Now!</Link>
                
            </div> */}
            
        </header>
     </div>
  
        
    )
}

export default Header;