import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import UserService from '../../services/users';
import {AxiosResponse} from 'axios';
import {User} from '../../types/types';

interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
  searchString: string | null
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
  searchString: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  const res = UserService.getUserData();
  return res;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchString(state, action) {
      state.searchString = action.payload
    }
  },
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

export const {setSearchString} = usersSlice.actions;

export const usersSelector = (state: RootState) => state.usersReducer;
export default usersSlice.reducer;
