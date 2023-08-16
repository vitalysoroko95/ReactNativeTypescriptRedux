import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../index';
import {User} from '../../types/types';

interface UserState {
  user: User | {};
}

const initialState: UserState = {
  user: {},
};


export const currentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    }
  },
});

export const {setCurrentUser} = currentUserSlice.actions;

export const userSelector = (state: RootState) => state.currentUserSlice;
export default currentUserSlice.reducer;
