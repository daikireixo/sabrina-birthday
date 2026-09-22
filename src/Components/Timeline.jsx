import { TIMELINE } from "./data";

export default function Timeline() {
  return (
    <section className="section timeline-wrap">
      <div className="kicker center">Story so far</div>
      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div className={`tl-item ${item.future ? "future" : ""}`} key={i}>
            <div className="tl-date">{item.date}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
