import axios from "axios";

export const userLogin = async (email, password) => {
    try {
        const callUser = await axios.post("http://localhost:3001/api/v1/user/login", {
        email : email,
        password : password
        })

        const authoken = await callUser.data.body.token

        localStorage.setItem( "token", authoken)
        
        return authoken
    } catch(error){
        console.log("erreur login", error.message);
        alert("Identifiant ou mot de passe incorrect")
        throw error;
    }

};

export const getUserProfile = async (token) => {
    try {
        const response = await axios.get("http://localhost:3001/api/v1/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.log("erreur récupération profil", error.message);
        throw error;
    }
};

export const userDisconnected = () => {

    localStorage.removeItem("token");
};