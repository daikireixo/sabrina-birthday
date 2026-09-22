import "./styles.css";
import PasswordGate from "./PasswordGate";
import Hero from "./Hero";
import Message from "./Message";
import Gallery from "./Gallery";
import CatCorner from "./CatCorner";
import Timeline from "./Timeline";
import Footer from "./Footer";

export default function BirthdayPage() {
  return (
    <PasswordGate>
      <div className="page">
        <Hero />
        <Message />
        <Gallery />
        <CatCorner />
        <Timeline />
        <Footer />
      </div>
    </PasswordGate>
  );
}
