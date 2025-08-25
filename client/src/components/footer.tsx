import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section" data-testid="footer-brand">
            <h3>Avon Splash Car Wash</h3>
            <p>
              Your trusted partner for eco-friendly, touchless car wash services in Avon, IN. 
              We guarantee satisfaction with every wash.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" data-testid="social-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Google" data-testid="social-google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" aria-label="Yelp" data-testid="social-yelp">
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section" data-testid="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/" data-testid="footer-home">Home</Link>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  data-testid="footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-services"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  data-testid="footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section" data-testid="footer-services">
            <h3>Services</h3>
            <ul>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-touchless"
                >
                  Touchless Automatic
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-selfservice"
                >
                  Self-Service
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-vacuums"
                >
                  Vacuums
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-vending"
                >
                  Vending
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                  data-testid="footer-washbooks"
                >
                  Wash Books
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" data-testid="footer-bottom">
          <p>&copy; 2025 Avon Splash Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
