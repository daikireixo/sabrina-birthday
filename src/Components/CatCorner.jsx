// Swap the photoSrc prop with a real photo of her cat when you have one:
// <CatCorner photoSrc="/cat.jpg" />
export default function CatCorner({ photoSrc = "/cat.jpg", catName = "the resident cat" }) {
  return (
    <section className="section cat-corner">
      <div className="kicker center">A word from her co-star</div>
      <div className="cat-frame">
        {photoSrc ? <img src={photoSrc} alt={catName} /> : "cat photo"}
        <div className="badge">🐾</div>
      </div>
      <div className="caption">"I was here first."</div>
      <div className="sub-caption">— {catName}, probably</div>
    </section>
  );
}
