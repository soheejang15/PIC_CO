import { useState } from "react";

import { GAME_STATUS } from "../constant";

export default function useGameStatus({ onChangeStatus }) {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.STANDBY);

  const changeToStandby = () => {
    setGameStatus(GAME_STATUS.STANDBY);
    onChangeStatus(GAME_STATUS.STANDBY);
  };

  const changeToOnGoing = () => {
    setGameStatus(GAME_STATUS.ONGOING);
    onChangeStatus(GAME_STATUS.ONGOING);
  };

  const changeToOver = () => {
    setGameStatus(GAME_STATUS.OVER);
    onChangeStatus(GAME_STATUS.OVER);
  };

  return {
    gameStatus,
    changeToStandby,
    changeToOnGoing,
    changeToOver
  };
}
