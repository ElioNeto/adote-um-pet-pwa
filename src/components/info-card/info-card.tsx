import "./info-card.css";

export function InfoCard(props: { title: string; value: string | undefined }) {
  return (
    <div className="info-card">
      <span className="title">{props.title}</span>
      <span className="value">{props.value}</span>
    </div>
  );
}
