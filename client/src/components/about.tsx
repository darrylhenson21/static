export default function About() {
  return (
    <section id="about" className="about section-padding" data-testid="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 data-testid="about-title">About Avon Splash Car Wash</h2>
            <p data-testid="about-description">
              Avon Splash Car Wash reopened on June 8, 2015 under new ownership and management. 
              At Avon Splash Car Wash, we strive to provide economical, eco-friendly, and outstanding 
              car wash services without use of harmful chemicals.
            </p>
            
            <h3 data-testid="guarantee-title">Our Guarantee</h3>
            <p data-testid="guarantee-description">
              At Avon Splash Car Wash we pride ourselves in the quality of our wash and guarantee 
              satisfaction. If you are unsatisfied with your experience we will provide a rewash for FREE.
            </p>
            
            <ul className="about-features" data-testid="about-features">
              <li data-testid="feature-eco">
                <i className="fas fa-leaf"></i> Eco-Friendly Solutions
              </li>
              <li data-testid="feature-chemicals">
                <i className="fas fa-shield-alt"></i> No Harmful Chemicals
              </li>
              <li data-testid="feature-pricing">
                <i className="fas fa-dollar-sign"></i> Economical Pricing
              </li>
              <li data-testid="feature-guarantee">
                <i className="fas fa-award"></i> Satisfaction Guaranteed
              </li>
            </ul>
          </div>
          
          <div className="about-image">
            <img 
              src="https://pixabay.com/get/g92fcaa20fd3eb7df2a2b113540197d17ee5df26e4f05e962e337b4a0fee18a7a5828e43490b83fddbfb162f5d6ebbed50127a156ca982499a6ee1b5abe5242a1_1280.jpg" 
              alt="Avon Splash Car Wash facility exterior" 
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
