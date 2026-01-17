import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const whyUsFeatures = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Compliance-First Operations',
            description: 'PF/ESI support, labour law documentation, and audit-ready processes.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Fast Hiring & Deployment',
            description: 'Quick onboarding and workforce scaling when you need it most.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
            title: 'End-to-End Execution',
            description: 'People, site management, and operations support under one roof.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Local Strength in North East',
            description: 'Ground network for land identification and project execution.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: 'Single-Point Accountability',
            description: 'One partner for multiple operational solutions—simplified management.'
        }
    ];

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
            title: 'Manpower Solutions',
            description: 'Complete workforce solutions from hiring to payroll-managed deployment.',
            link: '/services#manpower'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: 'Vendor Services',
            description: 'Civil, facilities, solar, electrical work and AMC support.',
            link: '/services#vendor'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z" />
                </svg>
            ),
            title: 'Land Acquisition Support',
            description: 'Site identification, verification, and stakeholder coordination in NE India.',
            link: '/services#land'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Payroll Management',
            description: 'Salary processing, compliance coordination, and documentation support.',
            link: '/services#payroll'
        }
    ];

    const industries = [
        'Infrastructure',
        'Manufacturing',
        'Hospitality',
        'Warehousing',
        'Retail',
        'Government Projects',
        'EPC',
        'Commercial Setups'
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__bg-gradient"></div>
                    <div className="hero__bg-glow"></div>
                </div>
                <div className="hero__container container">
                    <div className="hero__content">
                        {/* <div className="hero__badge animate-fade-in">
                            <span className="hero__badge-dot"></span>
                            Trusted Partner Since Years
                        </div> */}
                        <h1 className="hero__title heading-1 animate-fade-in delay-1">
                            BK Enterprise — Your Trusted Partner for{' '}
                            <span className="text-gradient">Manpower, Projects & Operations</span>
                        </h1>
                        <p className="hero__subtitle body-large animate-fade-in delay-2">
                            We support organizations across North East India with end-to-end manpower solutions,
                            vendor execution, land acquisition support, and payroll compliance—so you can focus
                            on growth while we handle operations.
                        </p>
                        <div className="hero__actions animate-fade-in delay-3">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Request a Call
                            </Link>
                            <Link to="/services" className="btn btn-secondary btn-lg">
                                Explore Services
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="hero__stats animate-fade-in delay-4">
                        <div className="hero__stat">
                            <span className="hero__stat-number">500+</span>
                            <span className="hero__stat-label">Successful Deployments</span>
                        </div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">50+</span>
                            <span className="hero__stat-label">Happy Clients</span>
                        </div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">8+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why BK Enterprise */}
            <section className="why-us section-large">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Why Choose Us</span>
                        <h2 className="heading-2">Why BK Enterprise</h2>
                        <p className="section-description">
                            We bring structure, speed, and reliability to every engagement.
                        </p>
                    </div>
                    <div className="why-us__grid">
                        {whyUsFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="why-us__card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="why-us__icon">
                                    {feature.icon}
                                </div>
                                <h3 className="why-us__title">{feature.title}</h3>
                                <p className="why-us__description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Snapshot */}
            <section className="services-snapshot section-large">
                <div className="services-snapshot__bg"></div>
                <div className="container">
                    <div className="section-header section-header--light">
                        <span className="section-tag section-tag--light">Our Solutions</span>
                        <h2 className="heading-2">Services We Offer</h2>
                        <p className="section-description">
                            Comprehensive operational support tailored to your business needs.
                        </p>
                    </div>
                    <div className="services-snapshot__grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                link={service.link}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Industries</span>
                        <h2 className="heading-2">Industries We Support</h2>
                    </div>
                    <div className="industries__grid">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="industries__item"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta section">
                <div className="container">
                    <div className="cta__card">
                        <div className="cta__content">
                            <h2 className="heading-2">Ready to Get Started?</h2>
                            <p className="cta__description">
                                Let's discuss how BK Enterprise can support your operational needs.
                            </p>
                        </div>
                        <div className="cta__actions">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
