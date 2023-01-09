import { useCallback } from "react";
import "./ResultModal.style.css";

export default function ResultModal({ handleClickReset, stage }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>GAME OVER!</h2>
        <p>STAGE {stage}</p>
        <button className={"button-replay"} onClick={handleClickReset}>
          REPLAY
        </button>
      </div>
    </div>
  );
}
