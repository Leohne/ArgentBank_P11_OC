import axios from "axios"

export const GET_USER = "GET_USER"

export const getUser = () => {

    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login").then((res) => {
            console.log(res);
        })
    }
}

// res = résultat
// dispatch = action fourni par le store. Utilisé pour envoyer une action à Redux
// axios = permet de faire des requêtes à la base de donnée