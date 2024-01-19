import axios from "axios";

export const userLogin = async (email, password) => {
    try {
        const callUser = await axios.post("http://localhost:3001/api/v1/user/login", {
        email : email,
        password : password
        })

        const authoken = await callUser.data.token

        localStorage.setItem( "token", authoken)
        
        return authoken
    } catch(error){
        console.log("erreur login", error.message);
        throw error;
    }

};