import "./index.scss";

const gameModesTypes = ["Single Player", "Multi Player"] as const;

type Props = {
  onChangeGameMode: (type: (typeof gameModesTypes)[number]) => () => void;
  onResetGame: () => void;
};

export const MenuOptions = ({ onChangeGameMode, onResetGame }: Props) => {
  return (
    <div className="settings-block">
      {gameModesTypes.map((mode) => (
        <button key={mode} onClick={onChangeGameMode(mode)}>
          {mode}
        </button>
      ))}

      <button className="reset" onClick={onResetGame}>
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};
