export default function Marquee() {
  const star = "✦";
  
  // Repeated items to ensure smooth infinite scrolling
  const items = Array(4).fill(null);

  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((_, i) => (
            <div key={`m1-${i}`} className="marquee-item">
              <span className="marquee-filled">Développement Web</span>
              <span className="marquee-star">{star}</span>
              <span className="marquee-outline">Full Stack</span>
              <span className="marquee-star">{star}</span>
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((_, i) => (
            <div key={`m2-${i}`} className="marquee-item">
              <span className="marquee-filled">Développement Web</span>
              <span className="marquee-star">{star}</span>
              <span className="marquee-outline">Full Stack</span>
              <span className="marquee-star">{star}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
