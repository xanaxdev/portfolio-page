'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Zniknięcie przycisku hamburgera przed otwarciem menu
      gsap.to(burgerRef.current, { opacity: 0, duration: 0.01 });

      // Wyjeżdżanie menu z prawej strony
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.5, display: "flex" });
    } else {
      // Chowanie menu na prawą stronę
      gsap.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.5, display: "none" });

      // Pojawienie się przycisku hamburgera po zamknięciu menu
      gsap.to(burgerRef.current, { opacity: 1, delay: 0.5, duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="absolute top-2 right-5 lg:top-10 lg:right-10 p-6 z-10">
        <button ref={burgerRef} className="text-3xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-black flex-col items-center justify-center z-40"
        style={{ display: 'none', opacity: 0, transform: 'translateX(100%)' }} // Wyjściowa pozycja z prawej
      >
        <button className="absolute font-desc font-extrabold top-10 right-10 text-4xl" onClick={toggleMenu}>
          Take me out
        </button>

        <button className="absolute bottom-10 center button rounded-full" onClick={toggleMenu}>
          Change display language 🌍
        </button>

        <ul className="space-y-8 text-4xl text-center">
          <li>
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About me</a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>Services</a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
