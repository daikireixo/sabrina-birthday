import { useState, useEffect } from "react";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;
    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    sync();
    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
    };
  }, []);

  const toggle = () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <button
      className={`music-toggle ${playing ? "playing" : ""}`}
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      type="button"
    >
      <span className="music-bars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}
