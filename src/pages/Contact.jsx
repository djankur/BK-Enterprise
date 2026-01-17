import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        'Manpower Project Management',
        'One-time Placement',
        'Contractual Hires',
        'Vendor Services',
        'Land Acquisition',
        'Payroll Management',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            service: '',
            message: ''
        });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-hero__bg"></div>
                <div className="container">
                    <div className="contact-hero__content">
                        {/* <span className="section-tag section-tag--light">Contact Us</span> */}
                        <h1 className="heading-1">Let's Talk About Your Requirement</h1>
                        <p className="body-large">
                            Share your project details or staffing needs, and our team will connect with you quickly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-main section-large">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2 className="heading-3">Get in Touch</h2>
                            <p className="contact-info__intro">
                                We're here to help with your operational needs. Reach out through any of the channels below.
                            </p>

                            <div className="contact-cards">
                                <a href="tel:+919876543210" className="contact-card">
                                    <div className="contact-card__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </a>

                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--whatsapp">
                                    <div className="contact-card__icon contact-card__icon--whatsapp">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </a>

                                <a href="mailto:info@bkenterprise.in" className="contact-card">
                                    <div className="contact-card__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@bkenterprise.in</p>
                                    </div>
                                </a>

                                <div className="contact-card">
                                    <div className="contact-card__icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Office Address</h4>
                                        <p>Guwahati, Assam, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-service-area">
                                <h4>Service Areas</h4>
                                <p>North East India — Assam, Meghalaya, Manipur, Nagaland, Tripura, Mizoram, Arunachal Pradesh, Sikkim</p>
                            </div>

                            {/* Map */}
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228469.05771925787!2d91.56879039999999!3d26.1445169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1705500000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="BK Enterprise Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-card">
                                <h2 className="heading-3">Send Us a Message</h2>
                                <p className="contact-form-intro">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                {submitStatus === 'success' && (
                                    <div className="form-success">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company" className="form-label">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="form-input"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-input"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service" className="form-label">Service Interested In</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="form-select"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service...</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="form-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us about your requirements..."
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn btn-primary btn-lg btn-full ${isSubmitting ? 'btn--loading' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="btn-spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
