import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "Responsive",
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
    description: <span>Outside the box ideas you will love!</span>,
    icon: "fas fa-people-carry"
  },
  {
    title: "Accessible",
    description: "Your apps will be available to all",
    icon: "fas fa-search"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section services blue-container text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Why hire me?</h3>
          <h2 className="mb-5">What I Offer</h2>
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
        <div >
          <a className="btn btn-dark btn-lg mt-5" href="/#portfolio">
            Lastest Work
          </a>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
