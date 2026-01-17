import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    const services = [
        { path: '/services#manpower', label: 'Manpower Solutions' },
        { path: '/services#vendor', label: 'Vendor Services' },
        { path: '/services#land', label: 'Land Acquisition' },
        { path: '/services#payroll', label: 'Payroll Management' },
    ];

    return (
        <footer className="footer">
            <div className="footer__glow"></div>
            <div className="footer__container container">
                <div className="footer__grid">
                    {/* Company Info */}
                    <div className="footer__section footer__section--brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">
                                <span>BK</span>
                            </div>
                            <div className="footer__logo-text">
                                <span className="footer__logo-name">BK Enterprise</span>
                                <span className="footer__logo-tagline">Manpower & Projects</span>
                            </div>
                        </div>
                        <p className="footer__description">
                            Your trusted partner for manpower solutions, vendor services, land acquisition,
                            and payroll management across North East India.
                        </p>
                        <div className="footer__social">
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a href="mailto:info@bkenterprise.in" className="footer__social-link" aria-label="Email">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                            <a href="tel:+919876543210" className="footer__social-link" aria-label="Phone">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h4 className="footer__title">Quick Links</h4>
                        <ul className="footer__links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer__section">
                        <h4 className="footer__title">Services</h4>
                        <ul className="footer__links">
                            {services.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__section">
                        <h4 className="footer__title">Contact Us</h4>
                        <ul className="footer__contact">
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>info@bkenterprise.in</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span>Guwahati, Assam, India</span>
                            </li>
                        </ul>
                        <p className="footer__service-area">
                            <strong>Service Areas:</strong> North East India
                        </p>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} BK Enterprise. All rights reserved.
                    </p>
                    <p className="footer__credits">
                        Trusted Partner for Manpower, Projects & Operations
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
