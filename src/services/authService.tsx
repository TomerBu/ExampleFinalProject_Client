import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const register = (email: string, username: string, password: string) => {
    return axios.post(`${url}/auth/register`, { email, username, password });
}

const login = (email: string, password: string) => {
    return axios.post(`${url}/auth/login`, { email, password })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        }
        );
};

export const auth = { register, login };