import { useState, useEffect } from "react";
import { CONFETTI_EMOJI } from "./data";

export default function ConfettiPiece({ onDone }) {
  const [style] = useState(() => ({
    left: Math.random() * 100 + "vw",
    fontSize: 0.8 + Math.random() * 0.9 + "rem",
    animationDuration: 2.6 + Math.random() * 2 + "s",
    opacity: 0.6 + Math.random() * 0.4,
  }));
  const [emoji] = useState(
    () => CONFETTI_EMOJI[Math.floor(Math.random() * CONFETTI_EMOJI.length)]
  );

  useEffect(() => {
    const id = setTimeout(onDone, 5200);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <div className="confetti-piece" style={style}>
      {emoji}
    </div>
  );
}
