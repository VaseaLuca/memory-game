import { combineReducers } from "@reduxjs/toolkit";
import memoryGame from "./slices/memoryGame";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  memoryGame: memoryGame,
});
