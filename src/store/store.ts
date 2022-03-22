import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jokeReducer from './joke/jokeSlice';

export enum Reducer {
    Joke = 'JOKE'
}

export const store = configureStore({
    reducer: {
        [Reducer.Joke]: jokeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;