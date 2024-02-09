import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cat } from "./types/memoryGame.types";
import { shuffle } from "shared/utils/array";

// it should be stored in .env :))
const catAPIUrl =
  "https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=beng&api_key=live_jNbEb2jazvEbDnG7xcP9IgDoAKuYboO66Td1DOKXxpmjkBf6OhvmNAMCaQ4ndHMk";

export const getCats = createAsyncThunk("memoryGame/getCats", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<Cat[]>(catAPIUrl);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  loadingCatItems: false,
  dataCatItems: [] as Cat[],
  errorCatItems: false,

  gameMode: "Single Player",
  matchedCardIds: [] as string[],
  score: {
    player1: 0,
    player2: 0,
  },
  gameOver: false,
};

const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState,
  reducers: {
    setMatchedCardIds: (state, { payload }) => {
      state.matchedCardIds = payload;
    },
    setGameMode: (state, { payload }) => {
      state.gameMode = payload;
      state.matchedCardIds = [];
      state.dataCatItems = shuffle(state.dataCatItems);
      state.score = { player1: 0, player2: 0 };
      state.gameOver = false;
    },
    resetGame: (state) => {
      state.dataCatItems = shuffle(state.dataCatItems);
      state.matchedCardIds = [];
      state.score = { player1: 0, player2: 0 };
      state.gameOver = false;
    },
    incrementScore: (state, { payload }: { payload: keyof typeof state.score }) => {
      const updatedScore = {
        ...state.score,
        [payload]: state.score[payload] + 1,
      };

      const totalScore = Object.values(updatedScore).reduce((acc, curr) => acc + curr);

      state.score = updatedScore;
      state.gameOver = totalScore === state.dataCatItems.length / 2;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCats.pending, (state) => {
        state.loadingCatItems = true;
      })
      .addCase(getCats.fulfilled, (state, { payload }) => {
        state.loadingCatItems = false;

        state.dataCatItems = [...payload, ...payload];
      })
      .addCase(getCats.rejected, (state) => {
        state.loadingCatItems = false;
      });
  },
});

export const { setGameMode, resetGame, setMatchedCardIds, incrementScore } = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
