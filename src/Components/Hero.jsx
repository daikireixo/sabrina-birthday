import { useState } from "react";
import ConfettiPiece from "./ConfettiPiece";

export default function Hero() {
  const [blown, setBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const makeWish = () => {
    if (blown) return;
    setBlown(true);
    setConfetti(Array.from({ length: 26 }, (_, i) => i));
  };

  const removePiece = (id) => {
    setConfetti((prev) => prev.filter((p) => p !== id));
  };

  return (
    <section className="hero">
      <div className="hero-eyebrow">Happy Birthday!</div>
      <h1>Sabrina</h1>
      <p className="sub">A little corner of the internet, made just to celebrate you.</p>
      <p className="sub">      May Allah bless you with endless happiness, good health, peace, and success. May He protect you, guide you toward everything good, and grant all the beautiful wishes in your heart.</p>

      <div className="wish-block">
        <div className={`candle ${blown ? "blown" : ""}`} onClick={makeWish}>
          <div className="flame" />
          <div className="wick" />
          <div className="num">26</div>
          <div className="stick" />
        </div>
        <div className={`wish-hint ${blown ? "granted" : ""}`}>
          {blown ? "wish granted 🤍" : "tap the candle & make a wish"}
        </div>
      </div>
      {confetti.map((id) => (
        <ConfettiPiece key={id} onDone={() => removePiece(id)} />
      ))}
    </section>
  );
}
