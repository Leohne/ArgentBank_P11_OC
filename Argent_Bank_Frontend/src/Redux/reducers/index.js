import { createReducer } from '@reduxjs/toolkit';
import { setUserProfile } from '../actions/userProfile';

const initialState = {
  user: {
    body: {
        email: null,
        userName: null,
    },
}};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserProfile, (state, action) => {
    state.user.body = action.payload;
  });
});

export default rootReducer;