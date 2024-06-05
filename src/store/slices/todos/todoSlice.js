import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reducerType: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { reducerType } = todoSlice.actions