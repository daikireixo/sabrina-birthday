import { useState, useEffect } from "react";
import { SITE_PASSWORD } from "./data";

const STORAGE_KEY = "sabrina-page-unlocked";

export default function PasswordGate({ children, onUnlock }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [checked, setChecked] = useState(false);

  // Stay unlocked across refreshes within the same browser tab session
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        setUnlocked(true);
      }
    } catch (e) {
      // sessionStorage unavailable — just fall back to asking every time
    }
    setChecked(true);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const isCorrect = value.trim().toLowerCase() === SITE_PASSWORD.trim().toLowerCase();
    if (isCorrect) {
      setUnlocked(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch (e) {
        // ignore if storage isn't available
      }
      // Called synchronously within this click handler so the browser still
      // counts it as a user gesture, which is required to start audio playback.
      if (onUnlock) onUnlock();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  // Avoid a flash of the lock screen while we check sessionStorage
  if (!checked) return null;

  if (unlocked) return children;

  return (
    <div className="lock-screen">
      <div className={`lock-card ${shake ? "shake" : ""}`}>
        <div className="lock-icon">🔒</div>
        <div className="lock-title">For Sabrina</div>
        <p className="lock-sub">This one's just for you. Enter the password to open it.</p>
        <form onSubmit={submit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="password"
            autoFocus
            className="lock-input"
          />
          <button type="submit" className="lock-button">
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}