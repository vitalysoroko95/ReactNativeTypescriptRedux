import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Users/UsersSlice'


export const store = configureStore({
  reducer: {
    userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;