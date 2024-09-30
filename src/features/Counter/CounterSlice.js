import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: 0,
    user : 'Nigar'
}

export const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        adding:(state) => {state.value += 1},
        reducing: (state) => {state.value -=1},
        addingByAmount: (state, action) => {state.value += action.payload}
    }
})

export const {adding, reducing, addingByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;