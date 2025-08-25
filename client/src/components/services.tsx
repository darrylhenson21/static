export default function Services() {
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
    <section id="services" className="services section-padding" data-testid="services-section">
      <div className="container">
        <h2 data-testid="services-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card" data-testid="service-touchless">
            <div className="service-icon">
              <i className="fas fa-car-wash"></i>
            </div>
            <h3>Touchless Automatic</h3>
            <p>
              State-of-the-art touchless automatic car wash system that protects your vehicle's 
              finish while delivering exceptional cleaning results.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="btn-touchless"
            >
              Learn More
            </a>
          </div>
          
          <div className="service-card" data-testid="service-selfservice">
            <div className="service-icon">
              <i className="fas fa-hand-holding-water"></i>
            </div>
            <h3>Self-Service</h3>
            <p>
              High-pressure self-service bays equipped with everything you need for a thorough 
              wash at your own pace and convenience.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="btn-selfservice"
            >
              Learn More
            </a>
          </div>
          
          <div className="service-card" data-testid="service-vacuums">
            <div className="service-icon">
              <i className="fas fa-air-freshener"></i>
            </div>
            <h3>Vacuums</h3>
            <p>
              Powerful vacuum systems to keep your vehicle's interior spotless and fresh. 
              Multiple vacuum stations available for your convenience.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="btn-vacuums"
            >
              Learn More
            </a>
          </div>
          
          <div className="service-card" data-testid="service-vending">
            <div className="service-icon">
              <i className="fas fa-shopping-basket"></i>
            </div>
            <h3>Vending</h3>
            <p>
              Convenient vending machines stocked with car care products, air fresheners, 
              and other automotive essentials for your needs.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="btn-vending"
            >
              Learn More
            </a>
          </div>
          
          <div className="service-card" data-testid="service-washbooks">
            <div className="service-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Wash Books</h3>
            <p>
              Save money with our convenient wash books offering multiple washes at discounted 
              rates. Perfect for regular customers.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-testid="btn-washbooks"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
