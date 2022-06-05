import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons/lib/icons';


const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <nav className="navbar">
            <h3 className="logo">Gaurav Gulati</h3>
            <ul className={hamburgerOpen ? "nav-links-mobile" : "nav-links"}>
                <Link to="/" className="home" onClick={hamburgerOpen ? toggleHamburger: {}}>
                    <li>Home</li>
                </Link>
                <Link to="/about" className="about" onClick={hamburgerOpen ? toggleHamburger: {}}>
                    <li>About</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={toggleHamburger}>
                {!hamburgerOpen ? (
                    <MenuOutlined style={{ fontSize: '26px', padding: '1rem', backgroundColor: '#F2D1D1'}}/>
                ) : (
                    <CloseOutlined style={{ fontSize: '26px', padding: '1rem', backgroundColor: '#F2D1D1'}}/>
                )}
            </button>
        </nav>
    );
};



export default NavBar;