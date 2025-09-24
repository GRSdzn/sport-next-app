"use client";
import { useState } from "react";
import "@/styles/layout/header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">KUN KHMER</div>

      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <a href="/federation" className="header__nav-link">
          Федерация
        </a>
        <a href="/news" className="header__nav-link">
          Новости и мероприятия
        </a>
        <a href="/about" className="header__nav-link">
          О Кун Кхмер
        </a>
        <a href="/contacts" className="header__nav-link">
          Контакты
        </a>
      </nav>

      <div className="header__socials">
        <a href="#" target="_blank">
          FB
        </a>
        <a href="#" target="_blank">
          IG
        </a>
      </div>

      <div className="header__cta">
        <span className="phone">+7 (123) 456-78-90</span>
        <button className="button">Записаться</button>
      </div>

      <div className="header__burger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* бургер иконка */}
      </div>
    </header>
  );
}
