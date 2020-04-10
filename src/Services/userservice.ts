import { authHeader } from '../helpers'
import { UserData } from '../Model/LoginModel'
import Axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    // getAll,
    // getById,
};

function login(credentials : UserData) {
    console.log("entre al login service")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:credentials.username, password:credentials.password })
    };

    return Axios.post("https://localhost:44380/api/users/login", requestOptions)
        .then(handleResponse)
        .then((user : UserData) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function register(user : UserData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return Axios.post("https://localhost:44380/api/users/register", requestOptions ).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response : any) {
    console.log("handle response")
    return response.json().then((json : string) => {
        const data = json && JSON.parse(json);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
            }
            debugger;
            const error = (data && data.token) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}