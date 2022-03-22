import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jokeReducer from './joke/jokeSlice';
import favoritesReducer from './favorites/favoritesSlice';

export enum Reducer {
    Joke = 'JOKE',
    Favorites = 'FAVORITES'
}

export const store = configureStore({
    reducer: {
        [Reducer.Joke]: jokeReducer,
        [Reducer.Favorites]: favoritesReducer
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