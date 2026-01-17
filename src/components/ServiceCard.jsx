import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
    return (
        <Link
            to={link}
            className="service-card"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="service-card__icon-wrapper">
                <div className="service-card__icon">
                    {icon}
                </div>
            </div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__description">{description}</p>
            <div className="service-card__arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
};

export default ServiceCard;
