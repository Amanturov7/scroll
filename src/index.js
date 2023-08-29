import React from "react";
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";
import MyNavbar from "./components/MyNavbar";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import ContactForm from "./components/callout";
import PortfolioSection from "./components/portfolio";
import FooterSection from "./components/footer2";
import MainHero from "./components/MainHero";
import Hero from "./components/hero";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <MainHero />
        <AboutSection />
        <ServicesSections />
        <PortfolioSection />
        <Hero />
        <ContactForm />
        <FooterSection />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
