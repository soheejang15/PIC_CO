import "./Status.style.css";

export default function Status({ stage, time }) {
  return (
    <div className="status_container">
      <span>Time {time}</span>
      <span>Stage {stage}</span>
    </div>
  );
}
