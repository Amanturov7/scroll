import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Stationary",
    description: "A yellow pencil with envelopes on a clean, blue backdrop!"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Ice Cream",
    description:
      "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!"
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "Strawberries",
    description:
      "Strawberries are such a tasty snack, especially with a little sugar on top!"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "Workspace",
    description:
      "A yellow workspace with some scissors, pencils, and other objects."
  }
];

const PortfolioSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection && window.scrollY > portfolioSection.offsetTop - 500) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Портфолио</h3>
          <h2 className={`mb-5 ${animate ? "fade-in visible" : "fade-in"}`}>
            Недавние работы
          </h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className={`col-lg-6 ${animate ? "fade-in visible" : "fade-in"}`} key={`portfolio_item_${index}`}>
              <Link
                to="portfolioItem" // Идентификатор элемента, к которому нужно прокрутить
                smooth={true}
                duration={500}
                className="portfolio-item"
                href=""
              >
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
