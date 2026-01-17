import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container container">
                <Link to="/" className="header__logo">
                    <div className="header__logo-icon">
                        <span>BK</span>
                    </div>
                    <div className="header__logo-text">
                        <span className="header__logo-name">BK Enterprise</span>
                        <span className="header__logo-tagline">Manpower & Projects</span>
                    </div>
                </Link>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__nav-item">
                                <Link
                                    to={link.path}
                                    className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="header__cta btn btn-primary">
                        Request a Call
                    </Link>
                </nav>

                <button
                    className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
};

export default Header;
