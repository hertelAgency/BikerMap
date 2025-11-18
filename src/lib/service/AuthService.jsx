import axios from "axios";

const API_URL = "https://localhost:5001/api/AuthManagement/";

const register = (username, email, password) => {
    return axios.post(
        API_URL + "Register", {
            username,
            email,
            password
        }
    )
}