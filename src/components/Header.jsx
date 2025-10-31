import logo from "../assets/ChatGPT Image 16 окт. 2025 г., 09_03_18.png";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Header.css"
import { useTranslation } from "react-i18next";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const Change_bar = () => {
        setMenuActive(!menuActive);
    };

    const handleLinkClick = () => {
        setMenuActive(false);
    };

    const { t, i18n } = useTranslation();

    return (
        <header>
            <div className="big_header_background">
                <div className="header_logo_background">
                    <nav className="header-nav">
                        <div className="header-container">
                            <div className="header-logo">
                                <img src={logo} alt="logo" />
                            </div>

                            <ul className={menuActive ? "active" : ""}>
                                <li>
                                    <a href="#" onClick={handleLinkClick}>{t(`home`)}</a>
                                </li>
                                <li>
                                    <a href="#tavarlar" onClick={handleLinkClick}>{t(`products`)}</a>
                                </li>
                                <li>
                                    <a href="#biz-haqimizda" onClick={handleLinkClick}>{t(`about`)}</a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={handleLinkClick}>{t(`contact`)}</a>
                                </li>
                                <MdOutlineClose className="close-btn" onClick={Change_bar} />
                            </ul>

                            <div className="header_bar">
                                <FaBars className="header-in-bar" onClick={Change_bar} />
                            </div>

                            <div className="langproviper">
                                <select
                                    id="select"
                                    onChange={(e) => { i18n.changeLanguage(e.target.value) }}
                                    defaultValue="uz"
                                >
                                    <option value="uz">🇺🇿 O'zbek</option>
                                    <option value="en">🇬🇧 English</option>
                                    <option value="ru">🇷🇺 Русский</option>
                                </select>
                            </div>
                        </div>
                    </nav>

                    <div className="big-logo">
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
