import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Logo à gauche */}
            <Link to="/" style={{ position: 'absolute', top: 70, left: 70, zIndex: 30 }}>
                <img
                    src="https://www.floatui.com/logo.svg"
                    width={120}
                    height={50}
                    alt="Site Logo"
                />
            </Link>

            {/* Bouton du menu hamburger à droite */}
            <button onClick={toggleMenu} style={{
                position: 'absolute',
                top: 70,
                right: 70,
                background: 'transparent',
                border: 'none',
                zIndex: 30,
                cursor: 'pointer',
                padding: 0,
                width: 30,
                height: 30,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <div style={{ width: '30px', height: '3px', backgroundColor: isOpen ? 'transparent' : 'gray', transition: 'all 0.3s ease' }}></div>
                <div style={{
                    width: '30px',
                    height: '3px',
                    backgroundColor: 'gray',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
                }}></div>
                <div style={{
                    width: '30px',
                    height: '3px',
                    backgroundColor: 'gray',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)',
                }}></div>
                <div style={{ width: '30px', height: '3px', backgroundColor: isOpen ? 'transparent' : 'gray', transition: 'all 0.3s ease' }}></div>
            </button>

            {/* Menu déroulant full-screen */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: isOpen ? '100vh' : '0',
                width: isOpen ? '100vw' : '0',
                background: 'white',
                transition: 'all 0.3s ease',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
            }}>
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center', width: '100%' }}>
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="link link-hover-effect">Accueil</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)} className="link link-hover-effect">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;
