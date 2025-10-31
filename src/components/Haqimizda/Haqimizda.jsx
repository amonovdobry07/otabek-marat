import "./Haqimizda.css";

import aboutImg from "../../assets/logo_with_text_transparent_hd.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Haqimizda = () => {
  useEffect(() => {
    const section = document.querySelector(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  }, []);

  const { t, i18n } = useTranslation()

  return (
    <section id="biz-haqimizda" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Biz haqimizda" />
        </div>

        <div className="about-text">
          <h2>{t(`bizhaqimizda`)}</h2>
          <p>
            {t(`bizZamonaviy`)}
          </p>
          <p>
            {t(`yildan`)}
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>{t(`yillikTajriba`)}</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>{t(`mamnunMijozlar`)}</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>{t(`dizaynLoyihalar`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Haqimizda;
