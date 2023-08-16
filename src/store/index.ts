import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Users/UsersSlice'
import currentUserSlice from "./CurrentUser/CurrentUserSlice";


export const store = configureStore({
  reducer: {
    usersReducer,
    currentUserSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;