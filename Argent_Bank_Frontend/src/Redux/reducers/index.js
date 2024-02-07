import { createReducer } from '@reduxjs/toolkit';
import { setUserProfile, removeUserProfile, newUserName } from '../actions/userProfile';

export const initialState = {
  user: {
    body: {
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
    },
}};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserProfile, (state, action) => {
    state.user.body = action.payload;
  })
    .addCase(newUserName, (state, action) => {
    state.user.body.userName = action.payload;
  })
    .addCase(removeUserProfile, (state) => {
    state.user.body = null;
  });
});

export default rootReducer;