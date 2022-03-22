import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IJoke } from '../../models/IJoke';
import { getItem, LocalStorageKey } from '../../services/localStorage';

interface FavoritesState {
    items: IJoke[];
}

const initialState: FavoritesState = {
    items: getItem(LocalStorageKey.Favorites)
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IJoke>) => {
            if (state.items.length === 10) {
                state.items.splice(0, 1);
            }
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = [...state.items.filter((item) => item.id !== action.payload)];
        },
        clear: (state) => {
            state.items = [];
        }
    }
});

export default favoritesSlice.reducer;