import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", email: ""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default userSlice.reducer;