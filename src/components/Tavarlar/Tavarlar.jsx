import "./Tavarlar.css";
import image4 from "../../assets/3.jpg";
import image1 from "../../rasmlar/rasm9.jpg";
import image2 from "../../rasmlar/rasm10.jpg";
import image3 from "../../rasmlar/rasm3.jpg";
import image5 from "../../rasmlar/rasm4.jpg";
import image6 from "../../rasmlar/rasm5.jpg";
import image7 from "../../rasmlar/rasm6.jpg";
import image8 from "../../rasmlar/rasm7.jpg";
import image9 from "../../rasmlar/rasm8.jpg";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Mahsulotlar = () => {
  const [koproq, setKoproq] = useState(false); // bosilganda true bo‘ladi
  const { t, i18n } = useTranslation();
  const mahsulotlar = [
    { id: 1, nomi: t(`qulayYotoq`), narx: "1 200 000 "+t(`som`), rasm: image4 },
    { id: 2, nomi: t(`yogochStol`), narx: "3 800 000 "+t(`som`), rasm: image1 },
    {
      id: 3,
      nomi: t(`oshxonaNaborToplami`),
      narx: "4 500 000 "+t(`som`),
      rasm: image2,
    },
    { id: 4, nomi: t(`spalniy`), narx: "1 800 000"+t(`som`), rasm: image3 },
    { id: 5, nomi: t(`kiyimJavon`), narx: "5 200 000 "+t(`som`), rasm: image5 },
    { id: 6, nomi: t(`oshxonaNabori`), narx: "2 900 000 "+t(`som`), rasm: image6 },
    { id: 7, nomi: t(`oshxonaMebel`), narx: "1 000 000 "+t(`som`), rasm: image7 },
    { id: 8, nomi: t(`oshxonaNabor`), narx: "3 200 000 "+t(`som`), rasm: image8 },
    { id: 9, nomi: t(`oshxonaDivani`), narx: "3 200 000 "+t(`som`), rasm: image9 },
  ];

  // dastlab 4 ta chiqadi
  const korinadiganMahsulotlar = koproq ? mahsulotlar : mahsulotlar.slice(0, 4);

  useEffect(() => {
    const cards = document.querySelectorAll(".mahsulot-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.1}s`;
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, [koproq]);

  return (
    <section id="tavarlar" className="mahsulotlar-section">
      <h2 className="bolim-nomi">{t(`bizningMahsulotlar`)}</h2>

      <div className="mahsulotlar-grid">
        {korinadiganMahsulotlar.map((m) => (
          <div key={m.id} className="mahsulot-card">
            <div className="rasm-quti">
              <img src={m.rasm} alt={m.nomi} />
              <div className="overlay">
                <button>{t(`korish`)}</button>
              </div>
            </div>
            <div className="mahsulot-info">
              <h3>{m.nomi}</h3>
              <p>{m.narx}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ko‘proq tugmasi */}
      {!koproq && (
        <button className="koproq-btn" onClick={() => setKoproq(true)}>
          {t(`koproqKorish`)}
        </button>
      )}
    </section>
  );
};

export default Mahsulotlar;
