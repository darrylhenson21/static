import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Blog() {
  return (
    <div data-testid="blog-page">
      <Header />
      
      {/* Blog Hero Section */}
      <section className="hero" style={{ height: '50vh', marginTop: '70px' }} data-testid="blog-hero">
        <div className="hero-content">
          <h1 data-testid="blog-title">Blog</h1>
          <p data-testid="blog-subtitle">Latest tips & updates from Avon Splash Car Wash</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding" style={{ background: '#FFF' }} data-testid="blog-content">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ol style={{ listStyle: 'none', padding: 0 }} data-testid="blog-posts">
              <li data-testid="blog-empty">No posts yet. Check back soon!</li>
              {/* Future posts would be added here
              <li>
                <a href="posts/car-care-tips.html">Essential Car Care Tips for Winter</a>
                <span style={{ color: '#666' }}> (December 15, 2024)</span>
              </li>
              <li>
                <a href="posts/eco-friendly-washing.html">Why Choose Eco-Friendly Car Washing</a>
                <span style={{ color: '#666' }}> (November 22, 2024)</span>
              </li>
              */}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
