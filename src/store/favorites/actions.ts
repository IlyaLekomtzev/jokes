import { AppDispatch, Reducer, RootState } from '../store';
import { favoritesSlice } from './favoritesSlice';
import { IJoke } from '../../models/IJoke';
import { LocalStorageKey, setItem, removeItem } from '../../services/localStorage';

export const addToFavorites = (joke: IJoke) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(favoritesSlice.actions.addItem(joke));

    const favorites = [...getState()[Reducer.Favorites].items];
    setItem(LocalStorageKey.Favorites, favorites);
};

export const removeFromFavorites = (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(favoritesSlice.actions.removeItem(id));

    const favorites = [...getState()[Reducer.Favorites].items];
    setItem(LocalStorageKey.Favorites, favorites);
};

export const removeAll = () => (dispatch: AppDispatch) => {
    dispatch(favoritesSlice.actions.clear());
    removeItem(LocalStorageKey.Favorites);
};