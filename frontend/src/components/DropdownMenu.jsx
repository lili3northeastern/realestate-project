import { useState } from 'react';
import './DropdownMenu.css'; 

function DropdownMenu({ navigate }) {
    const [isOpen, setIsOpen] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</div>
            <div className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
                <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>Menu</button>
                {isOpen && (
                    <div className="dropdown-content">
                        <button onClick={() => { navigate('Home'); setIsOpen(false); setIsMobileMenuOpen(false); }}>Home</button>
                        <button onClick={() => { navigate('Listing'); setIsOpen(false); setIsMobileMenuOpen(false); }}>Listing</button>
                        <button onClick={() => { navigate('Contact'); setIsOpen(false); setIsMobileMenuOpen(false); }}>Contact</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropdownMenu;
