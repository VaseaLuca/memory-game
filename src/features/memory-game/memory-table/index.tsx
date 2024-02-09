import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { Cat } from "store/slices/types/memoryGame.types";
import { incrementScore, resetGame, setMatchedCardIds } from "store/slices/memoryGame";
import { MemoryCard } from "../memory-card";
import gameBG from "../../../assets/images/woodBG.jpeg";
import "./index.scss";

type Props = {
  data: Cat[];
  loading: boolean;
};

export const MemoryTable = ({ data, loading }: Props) => {
  const dispatch = useDispatch();
  const { gameMode, matchedCardIds, gameOver, score } = useSelector((state: RootState) => state.memoryGame);

  const [player, setPlayer] = useState<"player1" | "player2">("player1");
  const [firstSelection, setFirstSelection] = useState(-1);
  const [secondSelection, setSecondSelection] = useState(-1);

  const isSinglePlayer = gameMode === "Single Player";

  useEffect(() => {
    dispatch(resetGame());
  }, []);

  useEffect(() => {
    if (gameOver) {
      alert(
        `Game Over! ${
          !isSinglePlayer ? (score.player1 > score.player2 && isSinglePlayer ? "Player1 won" : "Player2 won") : ""
        }`
      );
    }

    // Check if the first and second selections are different
    if (firstSelection !== -1 && secondSelection !== -1 && firstSelection !== secondSelection) {
      if (data[firstSelection] !== data[secondSelection] && !isSinglePlayer) {
        // If no match, switch player
        setPlayer((prevPlayer) => (prevPlayer === "player1" ? "player2" : "player1"));
      }

      setTimeout(() => {
        resetSelection();
      }, 1000);
    }

    if (firstSelection !== -1 && data[firstSelection] === data[secondSelection]) {
      dispatch(setMatchedCardIds([...matchedCardIds, data[firstSelection].id]));
      dispatch(incrementScore(player));
    }
  }, [firstSelection, secondSelection]);
  // console.log(player,'playerplayer');

  const resetSelection = () => {
    setFirstSelection(-1);
    setSecondSelection(-1);
  };

  const onCardClick = useCallback(
    (idx: number) => {
      // If the clicked index is the same as the first selection, reset the selection
      if (idx === firstSelection) {
        resetSelection();

        return;
      }

      // select if second is selected
      if (firstSelection !== -1) {
        setSecondSelection(idx);
      } else {
        setFirstSelection(idx);
      }
    },
    [firstSelection]
  );

  const memoMemoryCard = useMemo(
    () =>
      data.map((item, idx) => (
        <MemoryCard
          key={idx}
          index={idx}
          data={item}
          isDisabled={(firstSelection !== -1 && secondSelection !== -1) || gameOver}
          isSelected={firstSelection === idx || secondSelection === idx}
          isMached={matchedCardIds.includes(item.id)}
          onClick={onCardClick}
        />
      )),
    [data, firstSelection, matchedCardIds, onCardClick, secondSelection, gameOver]
  );

  return (
    <div className="memory-table">
      {loading ? <div className="memory-table__loading">Pending...</div> : memoMemoryCard}

      <img className="memory-table__board" src={gameBG} />
    </div>
  );
};
