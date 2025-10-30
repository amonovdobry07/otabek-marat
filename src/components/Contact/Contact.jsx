import "./Contact.css";
import { RiTelegram2Fill, RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Contact = () => {
    useEffect(() => {
        const section = document.querySelector(".contact");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(section);
    }, []);

    const { t, i18n } = useTranslation()
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                {/* Chap qism */}
                <div className="contact-left">
                    <h2 className="section-title">{t(`Bizbilanboglaning`)}</h2>
                    <p className="section-desc">
                        {t(`Sizningfikringiz`)}
                    </p>

                    <div className="contact-details">
                        <div className="detail">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>{t(`Manzil`)}</h4>
                                <p>Buxoro viloyat Vobkent Tumani Kulolchi MFY 236</p>
                            </div>
                        </div>

                        <div className="detail">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <h4>{t(`Telefon`)}</h4>
                                <a
                                    href="tel:+998972827747"
                                    style={{ color: "#ffffffff" }}
                                    rel="noopener noreferrer"
                                >
                                    <p> +998 (97) 282 77 47</p>
                                </a>
                            </div>
                        </div>

                        <div className="detail">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h4>{t(`Email`)}</h4>
                                <p>otabekochilov@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a
                            href="https://t.me/joinchat/AAAAAEmnJj9WH6sevO3JHw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiTelegram2Fill className="icons-social" /> Telegram
                        </a>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="icons-social" /> Instagram
                        </a>

                    </div>
                </div>

                {/* O‘ng qism */}
                <div className="contact-right">
                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder={t(`Ismingiz`)} required />
                            <input type="email" placeholder={t(`Emailmanzilingiz`)} required />
                        </div>
                        <textarea placeholder={t(`Xabaringizniyozing`)} required></textarea>
                        <button type="submit" className="btn">
                            {t(`Yuborish`)}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
