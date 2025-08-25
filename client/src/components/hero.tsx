export default function Hero() {
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
    <section id="home" className="hero" data-testid="hero">
      <div className="hero-content">
        <h1 data-testid="hero-title">Best Touchless Car Wash in Town!</h1>
        <p data-testid="hero-description">
          Protect your vehicle with economical, eco-friendly, and outstanding car wash services without harmful chemicals.
        </p>
        <div className="hero-cta">
          <a 
            href="#services" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#services');
            }}
            data-testid="btn-services"
          >
            Our Services
          </a>
          <a 
            href="tel:(317) 272-7746" 
            className="btn-secondary"
            data-testid="btn-call"
          >
            <i className="fas fa-phone"></i> Call Now: (317) 272-7746
          </a>
        </div>
      </div>
    </section>
  );
}
