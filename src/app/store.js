import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../featurs/userSlice'; 

export default configureStore({
    reducer: {
        user: userReducer,
 
      },
    });
    