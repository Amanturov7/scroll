import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
            My passion is to develop web applications that save energy, time and money!
            </h2>
            <p className="lead mb-5">
            I build web applications using React, Express and GraphQL. I have a Data Analytics Nanodegree and DevOps experience with Docker, Bash and SSH.
            </p>
            <a
              className="btn btn-dark btn-lg js-scroll-trigger"
              href="#services"
            >
              Why me?
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
