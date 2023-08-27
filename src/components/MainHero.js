import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const MainHero = () => (
  <ScrollableAnchor id="home">
  <section className="hero">
        <div className="hero__layer"></div>
        <div className="hero__content">
          <h1 className="hero__heading">
            Hey there! I'm <span className="hero__heading--name">Roberto Soriano.</span
            ><br />I'm a full stack developer.
          </h1>
          <a href="#portfolio" className="btn btn-primary btn-lg js-scroll-trigger" id="cta">Get to know me</a>
        </div>
      </section>
      </ScrollableAnchor>
);
export default MainHero;