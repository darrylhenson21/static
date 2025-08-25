import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional form as requested
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact section-padding" data-testid="contact-section">
      <div className="container">
        <h2 data-testid="contact-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 data-testid="contact-info-title">Visit Us Today</h3>
            <p data-testid="contact-info-description">
              Experience the best touchless car wash in town. We're here to serve you with 
              quality, eco-friendly car care services.
            </p>
            
            <div className="contact-item" data-testid="contact-address">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Address:</strong><br />
                Avon, IN<br />
                {/* Complete address would be added here */}
              </div>
            </div>
            
            <div className="contact-item" data-testid="contact-phone">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:(317) 272-7746">(317) 272-7746</a>
              </div>
            </div>
            
            <div className="contact-item" data-testid="contact-hours">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Hours:</strong><br />
                Open Daily<br />
                {/* Specific hours would be added here */}
              </div>
            </div>
            
            <div className="contact-item" data-testid="contact-email">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:info@avonsplashcarwash.com">info@avonsplashcarwash.com</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3 data-testid="contact-form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit} data-testid="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  data-testid="input-phone"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%' }}
                data-testid="btn-submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
