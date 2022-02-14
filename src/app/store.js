import {configureStore} from '@reduxjs/toolkit';
import { piecejobAPI } from '../services/pieceJobAPI';
import {authenticateAPI} from '../services/authenticate'
import {LoginAPI} from '../services/LoginAPI';
import {userSlice} from '../Feature/userSlice'

export default configureStore({
    reducer: {
        [piecejobAPI.reducerPath]: piecejobAPI.reducer,
        [authenticateAPI.reducerPath]: authenticateAPI.reducer,
       // [LoginAPI.reducerPath]: LoginAPI.reducer,
        user: userSlice.reducer,
    },
})