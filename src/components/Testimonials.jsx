import { testimonials } from "../data";

export default function Testimonials() {
  // Doubled for the infinite-scroll loop, exactly like the original.
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="reviews">
      <div className="reviews-header reveal">
        <span className="section-tag">✦ Client Love</span>
        <h2 className="section-title">What They're<br /><em>Saying</em></h2>
        <div className="gold-line"></div>
      </div>

      <div className="reviews-overflow">
        <div className="testimonial-track" id="testimonial-track">
          {doubled.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <span className="testimonial-quote">"</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-stars">{t.stars}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
