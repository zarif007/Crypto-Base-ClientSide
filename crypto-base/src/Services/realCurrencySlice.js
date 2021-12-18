import { createSlice } from '@reduxjs/toolkit'


const initialState ={ 
    value: 'USD'
}

export const realCurrencySlice = createSlice({
    name: 'realCurrency',
    initialState,
    reducers: {
        changeCurrency: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeCurrency } = realCurrencySlice.actions

export default realCurrencySlice.reducer