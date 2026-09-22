import { MESSAGE } from "./data";
import PawDivider from "./PawDivider";

export default function Message() {
  return (
    <section className="section message">
      <div className="kicker center">For you</div>
      {MESSAGE.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="signoff">— with all my love</div>
      <PawDivider />
    </section>
  );
}
