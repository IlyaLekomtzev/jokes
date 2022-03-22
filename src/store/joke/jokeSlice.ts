import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJoke } from '../../models/IJoke';

interface JokeState {
    joke: IJoke | null;
    isLoading: boolean;
    autoload: boolean;
    error: string;
}

const initialState: JokeState = {
    joke: null,
    isLoading: false,
    autoload: false,
    error: ''
};

export const jokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducers: {
        jokeGetting: (state) => {
            state.isLoading = true;
        },
        jokeGettingSuccess: (state, action: PayloadAction<IJoke>) => {
            state.joke = action.payload;
            state.isLoading = false;
        },
        jokeGettingFailure: (state) => {
            state.isLoading = false;
            state.error = 'Failed to get data';
        },
        setAutoload: (state, action: PayloadAction<boolean>) => {
            state.autoload = action.payload;
        },
    }
});

export default jokeSlice.reducer;