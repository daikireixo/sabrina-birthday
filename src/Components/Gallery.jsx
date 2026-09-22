import { PHOTOS } from "./data";


export default function Gallery() {
  return (
    <section className="section">
      <div className="kicker center">Some of my favorites</div>
      <div className="gallery-grid">
        {PHOTOS.map((src, i) => (
          <div className="ph" key={i}>
            {src ? <img src={src} alt="" /> : "photo"}
          </div>
        ))}
      </div>
    </section>
  );
}
