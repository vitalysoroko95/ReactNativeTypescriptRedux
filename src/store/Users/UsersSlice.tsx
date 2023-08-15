import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../index';
import UserService from '../../services/users';
import { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  const res = UserService.getUserData();
  return res;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<AxiosResponse>) => {
        state.loading = false;
        state.users = action.payload.data;
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const {} = userSlice.actions;

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
