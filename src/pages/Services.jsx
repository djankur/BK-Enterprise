import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash navigation
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="services-hero__bg"></div>
                <div className="container">
                    <div className="services-hero__content">
                        {/* <span className="section-tag section-tag--light">Our Services</span> */}
                        <h1 className="heading-1">Comprehensive Solutions for Your Business</h1>
                        <p className="body-large">
                            From workforce management to project execution—we deliver end-to-end
                            operational support tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service 1: Manpower Solutions */}
            <section id="manpower" className="service-section section-large">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon service-icon--blue">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="heading-2">Manpower Solutions</h2>
                            <p className="service-intro">
                                We provide workforce solutions tailored to your project timelines, skill requirements,
                                and compliance needs—from one-time hiring to full payroll-managed deployment.
                            </p>
                        </div>
                    </div>

                    <div className="service-cards">
                        {/* Sub-service A */}
                        <div className="service-card">
                            <div className="service-card__badge">Full Service</div>
                            <h3 className="heading-3">Manpower Project Management</h3>
                            <p className="service-card__subtitle">Payroll + Compliance Managed by BK</p>
                            <p className="service-card__description">
                                We hire the complete team based on your requirements, deploy them at your site,
                                and keep them under BK Enterprise payroll, while ensuring statutory compliance and HR operations.
                            </p>

                            <div className="service-card__features">
                                <h4>What we handle:</h4>
                                <ul>
                                    <li>Requirement mapping & workforce planning</li>
                                    <li>Hiring, verification & onboarding</li>
                                    <li>Payroll processing & wage disbursement</li>
                                    <li>PF/ESI compliance (where applicable), attendance, leave and records</li>
                                    <li>Labour law documentation, contractor compliance support</li>
                                    <li>Replacement handling & performance coordination</li>
                                    <li>Regular reporting to client (headcount, attendance, cost, compliance)</li>
                                </ul>
                            </div>

                            <div className="service-card__best-for">
                                <strong>Best for:</strong> Large projects, fast scaling, multi-location deployment, compliance-heavy operations.
                            </div>
                        </div>

                        {/* Sub-service B */}
                        <div className="service-card">
                            <div className="service-card__badge service-card__badge--teal">Placement</div>
                            <h3 className="heading-3">One-Time Placement</h3>
                            <p className="service-card__subtitle">Client Payroll</p>
                            <p className="service-card__description">
                                We source, screen, and build your team. Once selected, the employees are directly
                                hired under your payroll.
                            </p>

                            <div className="service-card__features">
                                <h4>Includes:</h4>
                                <ul>
                                    <li>Talent sourcing & screening</li>
                                    <li>Interview coordination and selection support</li>
                                    <li>Offer negotiation support</li>
                                    <li>Joining assurance and onboarding coordination</li>
                                </ul>
                            </div>

                            <div className="service-card__best-for">
                                <strong>Best for:</strong> Permanent hiring, leadership roles, long-term team building.
                            </div>
                        </div>

                        {/* Sub-service C */}
                        <div className="service-card">
                            <div className="service-card__badge service-card__badge--gold">Flexible</div>
                            <h3 className="heading-3">Contractual Hires</h3>
                            <p className="service-card__subtitle">Flexible Staffing</p>
                            <p className="service-card__description">
                                We provide contractual staffing for fixed periods or project-based needs.
                                This is ideal when you need speed, flexibility, and control on cost.
                            </p>

                            <div className="service-card__features">
                                <h4>Includes:</h4>
                                <ul>
                                    <li>Short-term / seasonal hiring</li>
                                    <li>Skilled and unskilled workforce deployment</li>
                                    <li>Contract renewals and replacements</li>
                                    <li>Attendance and performance tracking support</li>
                                    <li>Compliance coordination depending on engagement model</li>
                                </ul>
                            </div>

                            <div className="service-card__best-for">
                                <strong>Best for:</strong> Peak workloads, urgent requirements, temporary projects, trial-to-hire scenarios.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Vendor Services */}
            <section id="vendor" className="service-section service-section--alt section-large">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon service-icon--teal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="heading-2">Vendor Services</h2>
                            <p className="service-intro">
                                We work as your trusted vendor for on-ground execution—helping you set up, build,
                                and maintain facilities efficiently with reliable manpower and project coordination.
                            </p>
                        </div>
                    </div>

                    <div className="vendor-grid">
                        <div className="vendor-card">
                            <div className="vendor-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z" />
                                </svg>
                            </div>
                            <h3>Civil Construction Works</h3>
                            <p>Small to mid-scale execution, expansions, repairs</p>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                                </svg>
                            </div>
                            <h3>Facilities Setup & Management</h3>
                            <p>Workplace setup, basic maintenance, operational support</p>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            </div>
                            <h3>Solar / Electrical Work</h3>
                            <p>Installation support, electrical setup and maintenance</p>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3>Yearly Maintenance / AMC</h3>
                            <p>Planned maintenance, repair support, vendor coordination</p>
                        </div>
                    </div>

                    <div className="service-note">
                        <strong>Best for:</strong> Businesses expanding in North East India, new facility setup, ongoing maintenance needs.
                    </div>
                </div>
            </section>

            {/* Service 3: Land Acquisition Support */}
            <section id="land" className="service-section section-large">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon service-icon--green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="heading-2">Land Acquisition Support</h2>
                            <p className="service-sub">North East India Focus</p>
                            <p className="service-intro">
                                We help you identify, evaluate, and secure land or suitable project locations across
                                North East India—reducing risk and saving time with local support.
                            </p>
                        </div>
                    </div>

                    <div className="land-features">
                        <div className="land-feature">
                            <div className="land-feature__number">01</div>
                            <div>
                                <h4>Requirement Understanding</h4>
                                <p>Location, size, access, zoning intent analysis</p>
                            </div>
                        </div>
                        <div className="land-feature">
                            <div className="land-feature__number">02</div>
                            <div>
                                <h4>Site Identification</h4>
                                <p>Leveraging our strong local network</p>
                            </div>
                        </div>
                        <div className="land-feature">
                            <div className="land-feature__number">03</div>
                            <div>
                                <h4>Preliminary Verification</h4>
                                <p>Ownership clarity and local checks</p>
                            </div>
                        </div>
                        <div className="land-feature">
                            <div className="land-feature__number">04</div>
                            <div>
                                <h4>Site Visit Coordination</h4>
                                <p>Arranging visits and negotiations</p>
                            </div>
                        </div>
                        <div className="land-feature">
                            <div className="land-feature__number">05</div>
                            <div>
                                <h4>Stakeholder Connection</h4>
                                <p>Connecting with local stakeholders for smooth closure</p>
                            </div>
                        </div>
                    </div>

                    <div className="disclaimer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4M12 8h.01" />
                        </svg>
                        <p>Final legal verification and registration to be done through authorized legal professionals.</p>
                    </div>
                </div>
            </section>

            {/* Service 4: Payroll Management */}
            <section id="payroll" className="service-section service-section--alt section-large">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon service-icon--gold">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="heading-2">Payroll Management</h2>
                            <p className="service-intro">
                                Payroll isn't just salary—it's compliance, accuracy, timeliness, and documentation.
                                We manage your payroll operations so you stay compliant and stress-free.
                            </p>
                        </div>
                    </div>

                    <div className="payroll-grid">
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4>Monthly Payroll Processing</h4>
                            <p>Salary calculation, deductions, payslips</p>
                        </div>
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h4>Attendance & Leave Integration</h4>
                            <p>Manual or system-based tracking</p>
                        </div>
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <h4>Statutory Compliance</h4>
                            <p>PF/ESI coordination where applicable</p>
                        </div>
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h4>Employee Documentation</h4>
                            <p>Joining forms, registers, records</p>
                        </div>
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                            </svg>
                            <h4>Contractor Payroll Support</h4>
                            <p>Project-based workforce management</p>
                        </div>
                        <div className="payroll-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h4>Management Reports</h4>
                            <p>Salary summary, headcount, compliance trackers</p>
                        </div>
                    </div>

                    <div className="service-note service-note--center">
                        <strong>Best for:</strong> Companies that want to reduce HR workload, avoid errors, and stay compliant.
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta section">
                <div className="container">
                    <div className="services-cta__card">
                        <h2 className="heading-2">Need a Custom Solution?</h2>
                        <p>Let's discuss your specific requirements and create a tailored solution.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
