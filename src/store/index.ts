import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Users/UsersSlice'


export const store = configureStore({
  reducer: {
    userReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;