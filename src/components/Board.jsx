import "./Board.style.css";
import ColorBox from "./ColorBox";
import { GAME_STATUS } from "../constant";

function generateDuckArray(level) {
  return Array(level).fill(null);
}

export default function Board({
  currentLevel,
  stageAnswer,
  deductTimer,
  setNextStage,
  handleClickStart,
  gameStatus
}) {
  const onClickColorBox = id => {
    if (id === stageAnswer.correctNum) {
      setNextStage();
    } else {
      deductTimer(3);
    }
  };

  return (
    <div className="board_container">
      {gameStatus === GAME_STATUS.STANDBY && (
        <div className="board_cover">
          <button className="button-start" onClick={handleClickStart}>
            START
          </button>
        </div>
      )}
      {generateDuckArray(currentLevel).map((_, rowIndex) => (
        <div className="line_wrapper">
          {generateDuckArray(currentLevel).map((__, columnIndex) => (
            <ColorBox
              onClick={onClickColorBox}
              key={currentLevel * rowIndex + (columnIndex + 1)}
              id={currentLevel * rowIndex + (columnIndex + 1)}
              backgroundColor={
                stageAnswer?.correctNum ===
                currentLevel * rowIndex + (columnIndex + 1)
                  ? stageAnswer?.correctColor
                  : stageAnswer?.wrongColor
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
