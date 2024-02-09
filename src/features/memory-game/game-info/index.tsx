import { useMemo } from "react";
import "./index.scss";


type Props = {
  gameMode: string;
  score: {
    player1: number;
    player2: number;
  };
};

export const GameInfo = ({ gameMode, score }: Props) => {
  const displayPoints: { [key: string]: JSX.Element } = useMemo(
    () => ({
      "Single Player": <b>Player: {score.player1}</b>,
      "Multi Player": (
        <div className="game-info__multi">
          <span>
            <b>Player 1: {score.player1}</b>
          </span>

          <span>
            <b>Player 2: {score.player2}</b>
          </span>
        </div>
      ),
    }),
    [score.player1, score.player2]
  );

  return <div className="game-info">{displayPoints[gameMode]}</div>;
};
