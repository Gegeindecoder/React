import {configureStore} from'@reduxjs/toolkit'
import { textReducer } from './textSlice'

export default configureStore({
    reducer:{
        texting: textReducer
    }
})