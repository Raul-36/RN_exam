import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
    name: 'ids',
    initialState: {
        ids: []
    },
    reducers: {
        addId: (state, action) => {
            state.ids.push(action.payload);
        },
        removeId: (state, action) => {
            state.ids = state.ids.filter((id) => id !== action.payload);
        },
        clearIds: (state) => {
            state.ids = [];
        },
    },
});

export const { addId, removeId, clearIds } = idSlice.actions;
export default idSlice.reducer;