import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Testo from '../types/text'


// const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

export const textSlice = createSlice({
    name: 'texting',
    initialState: {
        value: []
    },

    reducers: {

        add: (state: any, actions) => {
            state.value.push(actions.payload)
        },
        update: (state: any, actions) => {

            const text: Testo = actions.payload
             state.value.map((i:any)=>{
                if(i.id == text.id){state.value[text.id - 101] = text}
             })
        },
        remove: (state: any, action) => {
            // state.value.remove[action.payload.id - 101] 
            https://www.youtube.com/watch?v=h71J37UaKdE&list=PLtFbQRDJ11kHPsrZ_jZHrGGpwtS7Ngrl8&index=5
            state.value = state.value.filter((item:any) => item.id !== action.payload.id)
        },

    }
})

export const { add, update, remove } = textSlice.actions

export const textReducer = textSlice.reducer 