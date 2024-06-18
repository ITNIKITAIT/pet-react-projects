import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    selectors: {
        selectFavorites: (state) => state,
    },
    reducers: {
        toggleFavorites: (state, action) => {
            const recipe = action.payload;
            const id = recipe.id;
            if (state[id]) {
                delete state[id];
            } else {
                state[id] = recipe;
            }
        },
    },
});

export const { actions, reducer, selectors } = favoritesSlice;
