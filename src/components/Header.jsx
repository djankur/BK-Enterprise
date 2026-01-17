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

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}>
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

                    {/* Desktop Navigation */}
                    <nav className="header__nav header__nav--desktop">
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

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Navigation - Dropdown from top */}
                <div className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}>
                    <ul className="header__mobile-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__mobile-item">
                                <Link
                                    to={link.path}
                                    className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/contact"
                        className="header__mobile-cta btn btn-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Request a Call
                    </Link>
                </div>
            </header>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="header__overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Header;
