import React from "react";

function AboutSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="content-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
            GisPro – это многопрофильная компания,
специализирующийся в
направлениях как ГИС технологии, а также ИТ
технологии.            </h2>
            <p className="lead mb-5">
           На сегодняшний день наша компания
разрабатывает и реализует проекты, на которых
работает большое количество квалифицированных
специалистов. Структура нашей компании дает
возможность оказывать своим партнерам весь спектр
услуг, от разработки концепции объекта, его
проектирования, моделирования в полном комплекте
для реализиции на результат.            </p>
            <button
              className="btn btn-dark btn-lg js-scroll-trigger"
              onClick={scrollToServices}
            >
              Почему мы?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
