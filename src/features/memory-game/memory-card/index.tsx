import { Cat } from "store/slices/types/memoryGame.types";
import "./index.scss";

type Props = {
  data: Cat;
  index: number;
  isMached: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  onClick: (idx: number) => void;
};

export const MemoryCard = ({ data, index, isMached, isDisabled, isSelected, onClick }: Props) => {
  return (
    <div className="memory-card" onClick={isDisabled ? undefined : () => onClick(index)}>
      <div className={`front ${isSelected || isMached ? "rotated" : ""}`} />

      <div className={`back ${isSelected || isMached ? "" : "rotated"}`}>
        <img src={data.url} alt={data.url} />
      </div>
    </div>
  );
};
