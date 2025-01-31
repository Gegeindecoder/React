import { createSlice } from '@reduxjs/toolkit'


const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

export const textSlice = createSlice({
    name: 'texting',
    initialState: {
        value: []
    },

    reducers: {

        add: (state:any, actions) => {
            state.value.push(actions.payload)
        }
    }
})

export const { add } = textSlice.actions

export const textReducer = textSlice.reducer 