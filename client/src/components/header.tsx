import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header className="header" data-testid="header">
      <nav className="container nav-container">
        <Link href="/" className="logo" data-testid="logo">
          Avon Splash Car Wash
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} data-testid="nav-menu">
          <li>
            <Link 
              href="/" 
              className={location === "/" ? "active" : ""} 
              onClick={closeMenu}
              data-testid="nav-home"
            >
              Home
            </Link>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              data-testid="nav-about"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
              data-testid="nav-services"
            >
              Services
            </a>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={location === "/blog" ? "active" : ""} 
              onClick={closeMenu}
              data-testid="nav-blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          data-testid="hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
