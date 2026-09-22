const PAW_PATH =
  "M12 14c-2.8 0-5.5 2.1-5.5 4.6 0 1.6 1.3 2.4 2.9 2.4.9 0 1.7-.3 2.6-.3.9 0 1.7.3 2.6.3 1.6 0 2.9-.8 2.9-2.4 0-2.5-2.7-4.6-5.5-4.6z";

function Paw() {
  return (
    <svg viewBox="0 0 24 24">
      <path d={PAW_PATH} />
      <ellipse cx="5.2" cy="10.5" rx="1.8" ry="2.3" />
      <ellipse cx="9.3" cy="7.2" rx="1.7" ry="2.2" />
      <ellipse cx="14.7" cy="7.2" rx="1.7" ry="2.2" />
      <ellipse cx="18.8" cy="10.5" rx="1.8" ry="2.3" />
    </svg>
  );
}

export default function PawDivider() {
  return (
    <div className="paw-divider">
      <Paw />
      <Paw />
      <Paw />
    </div>
  );
}
