import { MemoryGame } from "features/memory-game";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="Home">
      <MemoryGame />
    </div>
  );
};

export default HomePage;
