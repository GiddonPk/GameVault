// src/store/gameSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBest } from "../services/fetch";

// Acción asíncrona para obtener los juegos
export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
    const response = await getBest();
    return response.results;
});

const gameSlice = createSlice({
    name: "games",
    initialState: {
        juegos: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {}, // Puedes agregar otros reducers aquí si necesitas
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.juegos = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default gameSlice.reducer;
