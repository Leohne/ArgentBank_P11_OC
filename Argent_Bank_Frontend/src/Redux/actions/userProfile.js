import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from "@reduxjs/toolkit";

export const setUserProfile = createAction('SET_USER_PROFILE');
export const newUserName = createAction('NEW_USER_NAME');
export const removeUserProfile = createAction('REMOVE_USER_PROFILE');

export const userLogin = async (email, password ,dispatch) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", {
            email: email,
            password: password
        });

        const token = response.data.body.token;
        localStorage.setItem("token", token);
        if(token){
        const userProfileData = await getUserProfile(token)
        const userData = {
            email: userProfileData.body.email,
            firstName: userProfileData.body.firstName,
            lastName: userProfileData.body.lastName,
            userName: userProfileData.body.userName
        }
        dispatch(setUserProfile(userData)); 
        }      
    } catch (error) {
        console.log("erreur login", error.message);
        alert("Identifiant ou mot de passe incorrect");
        throw error;
    }
};

export const getUserProfile = async (token) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/profile",{}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("erreur récupération profil", error.message);
        throw error;
    }
};

export const replaceUserName = createAsyncThunk(
  'user/replaceUserName',
  async ({ userName, token }, { dispatch }) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      console.log(userName);
      dispatch(newUserName(userName));
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const userDisconnected = (dispatch) => {

    localStorage.removeItem("token");
    localStorage.removeItem("persist:root")
    dispatch(removeUserProfile())    
};