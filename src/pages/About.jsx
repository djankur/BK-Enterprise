import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Compliance-First Approach',
            description: 'We prioritize statutory compliance and documentation in every engagement.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Fast Deployment Capability',
            description: 'Quick team mobilization and workforce scaling when timelines matter.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
            title: 'One Partner, Multiple Needs',
            description: 'From manpower to payroll to vendor work—simplify your operational management.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Strong Local Network',
            description: 'Deep presence in North East India for land and project execution support.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: 'Clear Communication',
            description: 'Transparent processes and single-point accountability in every project.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero__bg"></div>
                <div className="container">
                    <div className="about-hero__content">
                        {/* <span className="section-tag section-tag--light">About Us</span> */}
                        <h1 className="heading-1">Built on Trust.<br /><span className="text-gradient">Driven by Execution.</span></h1>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story section-large">
                <div className="container">
                    <div className="about-story__grid">
                        <div className="about-story__content">
                            <h2 className="heading-2">Who We Are</h2>
                            <p className="about-story__lead">
                                BK Enterprise is a service-driven organization supporting businesses with manpower
                                solutions, vendor execution, payroll management, and land acquisition support—especially
                                across North East India.
                            </p>
                            <p>
                                We believe great outcomes come from strong planning, right people, and compliant
                                operations. That's why we focus on structured delivery, transparent processes, and
                                dependable on-ground coordination.
                            </p>
                            <p>
                                Whether you're scaling your workforce, setting up a new facility, or looking for
                                reliable land in the region—BK Enterprise brings the local expertise and
                                operational capability you need.
                            </p>
                        </div>
                        <div className="about-story__visual">
                            <div className="about-story__card">
                                <div className="about-story__stat">
                                    <span className="about-story__stat-number">8+</span>
                                    <span className="about-story__stat-label">Years of Experience</span>
                                </div>
                            </div>
                            <div className="about-story__card about-story__card--offset">
                                <div className="about-story__stat">
                                    <span className="about-story__stat-number">500+</span>
                                    <span className="about-story__stat-label">Successful Deployments</span>
                                </div>
                            </div>
                            <div className="about-story__card">
                                <div className="about-story__stat">
                                    <span className="about-story__stat-number">50+</span>
                                    <span className="about-story__stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="about-highlights section-large">
                <div className="about-highlights__bg"></div>
                <div className="container">
                    <div className="section-header section-header--light">
                        <span className="section-tag section-tag--light">Our Strengths</span>
                        <h2 className="heading-2">What Sets Us Apart</h2>
                    </div>
                    <div className="about-highlights__grid">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="highlight-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="highlight-card__icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="about-mission section">
                <div className="container">
                    <div className="about-mission__card">
                        <div className="about-mission__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <div className="about-mission__content">
                            <h2 className="heading-3">Our Mission</h2>
                            <p className="about-mission__text">
                                We don't just supply services—we deliver outcomes. Our mission is to make it easier
                                for organizations to execute projects and scale operations with structure, speed,
                                and responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container">
                    <div className="about-cta__card">
                        <h2 className="heading-2">Let's Work Together</h2>
                        <p>Partner with BK Enterprise for your next project.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
