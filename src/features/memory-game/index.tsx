import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { getCats, resetGame, setGameMode } from "store/slices/memoryGame";
import { AppDispatch } from "store/store";
import { MemoryTable } from "./memory-table";
import { GameInfo } from "./game-info";
import { MenuOptions } from "./menu-options";

const gameModesTypes = ["Single Player", "Multi Player"] as const;

export const MemoryGame = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dataCatItems, loadingCatItems, gameMode, score } = useSelector((state: RootState) => state.memoryGame);

  useEffect(() => {
    dispatch(getCats());
  }, []);

  const changeGameMode = (type: (typeof gameModesTypes)[number]) => () => dispatch(setGameMode(type));
  const onResetGame = () => dispatch(resetGame());

  return (
    <>
      <GameInfo gameMode={gameMode} score={score} />

      <MemoryTable data={dataCatItems} loading={loadingCatItems} />

      <MenuOptions onChangeGameMode={changeGameMode} onResetGame={onResetGame} />
    </>
  );
};
