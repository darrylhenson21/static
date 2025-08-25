export default function Testimonials() {
  return (
    <section className="testimonials section-padding" data-testid="testimonials-section">
      <div className="container">
        <h2 data-testid="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card" data-testid="testimonial-1">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">
              "Excellent touchless car wash! My car comes out spotless every time and I love that 
              they don't use harsh chemicals. The staff is always friendly and helpful."
            </p>
            <div className="testimonial-author">- Sarah Johnson</div>
          </div>
          
          <div className="testimonial-card" data-testid="testimonial-2">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">
              "Best car wash in Avon! The self-service bays are well-maintained and the automatic 
              wash does an amazing job. Great value for the money."
            </p>
            <div className="testimonial-author">- Mike Thompson</div>
          </div>
          
          <div className="testimonial-card" data-testid="testimonial-3">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">
              "I've been coming here for years. The touchless system is perfect for my new car 
              and their satisfaction guarantee shows they really care about quality service."
            </p>
            <div className="testimonial-author">- Jennifer Davis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
