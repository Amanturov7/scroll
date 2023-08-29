import React from "react";
import { Link } from 'react-scroll';
import GeodesistIcon from '../scss/img/geodesitIcon.png'
const ServicesOffered = [
  {
    title: "Приложения",
    description: "Fully responsive applications!",
    icon: "fas fa-mobile-alt"
    
  },
  {
    title: "Customization",
    description: "Tailor-made applications",
    icon: "fas fa-pencil-alt"
  },
  {
    title: "Innovative",
    description: "сьемка и обучение эксплуатации с новейшими геодезическими приборами;",
    icon: GeodesistIcon
  },
  {
    title: "Web - разработка",
    description: "разработка программного обеспечения и дизайн информационных систем на основе ГИС",
    icon: "fas fa-map"
  }
];
const ServicesSections = () => (
  <section className="content-section services blue-container text-white text-center" id="services">
    <div className="container">
      <div className="content-section-heading">
        <h2 className="mb-5">Наши услуги</h2>
      </div>
      <div className="row">
        {ServicesOffered.map((service, index) => (
          <div
            className="col-lg-3 col-md-6 mb-5 mb-lg-0"
            key={`service_${index}`}
          >
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className={service.icon} />
            </span>
            <h4>
              <strong>{service.title}</strong>
            </h4>
            <p className="text-faded mb-0">{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="portfolio" // Идентификатор элемента, к которому нужно прокрутить
          smooth={true}
          duration={500}
          className="btn btn-dark btn-lg mt-5"
        >
          Недавние работы
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSections;
