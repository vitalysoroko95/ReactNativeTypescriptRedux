import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';


export const selectUsers = (state: RootState) => state.usersReducer.users
export const searchString = (state: RootState) => state.usersReducer.searchString
export const selectedUsers = createSelector(
  [selectUsers, searchString],
  (allUsers, searchString) => {
    let newArr = [...allUsers]
    if (searchString !== null) {
      const newSearchString = new RegExp(searchString, "i");
      newArr = newArr.filter(item => item.name.match(newSearchString))
    }
    return newArr;
  }
)
