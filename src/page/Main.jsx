import Title from "../components/Title";
import Status from "../components/Status";
import Board from "../components/Board";
import ResultModal from "../components/ResultModal";
import { getLineBlockNum } from "../utils/index";

import { useState, useEffect } from "react";

import { getRandomAnswer } from "../utils";
import useTimer from "../hooks/useTimer";
import useGameStatus from "../hooks/useGameStatus";
import { GAME_STATUS } from "../constant";

export default function Main() {
  const { time, startTimer, deductTimer, stopTimer } = useTimer();
  const {
    gameStatus,
    changeToStandby,
    changeToOnGoing,
    changeToOver
  } = useGameStatus({
    onChangeStatus: status => {
      if (status === GAME_STATUS.STANDBY) {
        resetGame();
      } else if (status === GAME_STATUS.ONGOING) {
        startGame();
      } else if (status === GAME_STATUS.OVER) {
        stopTimer();
      }
    }
  });
  const [stage, setStage] = useState(0);
  const [stageAnswer, setStageAnswer] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(2);

  useEffect(() => {
    if (time <= 0 && gameStatus === GAME_STATUS.ONGOING) {
      changeToOver();
    }
  }, [time]);

  const resetGame = () => {
    setStage(0);
    setStageAnswer(null);
  };

  const startGame = () => {
    setNextStage();
  };

  const setNextStage = () => {
    startTimer(15);
    setStage(stage + 1);
    setStageAnswer(getRandomAnswer(stage));
    setCurrentLevel(getLineBlockNum(stage));
  };

  return (
    <div>
      <Title />
      <Status stage={stage} time={time} />
      <Board
        currentLevel={currentLevel}
        stageAnswer={stageAnswer}
        deductTimer={deductTimer}
        setNextStage={setNextStage}
        handleClickStart={changeToOnGoing}
        gameStatus={gameStatus}
      />

      {gameStatus === GAME_STATUS.OVER && (
        <ResultModal handleClickReset={changeToStandby} stage={stage} />
      )}
    </div>
  );
}
