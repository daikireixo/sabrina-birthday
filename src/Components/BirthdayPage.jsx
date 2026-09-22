import "./styles.css";
import { MUSIC_SRC } from "./data";
import PasswordGate from "./PasswordGate";
import MusicToggle from "./MusicToggle";
import Hero from "./Hero";
import Message from "./Message";
import Gallery from "./Gallery";
import CatCorner from "./CatCorner";
import Timeline from "./Timeline";
import Footer from "./Footer";

export default function BirthdayPage() {
  const tryStartMusic = () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => {
        // Autoplay was blocked — that's fine, the toggle button still works.
      });
    }
  };

  return (
    <>
      <audio id="bg-music" src={MUSIC_SRC} loop />
      <PasswordGate onUnlock={tryStartMusic}>
        <div className="page">
          <MusicToggle />
          <Hero />
          <Message />
          <Gallery />
          <CatCorner />
          <Timeline />
          <Footer />
        </div>
      </PasswordGate>
    </>
  );
}