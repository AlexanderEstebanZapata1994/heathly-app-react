// import { authHeader } from '../helpers'
import { UserData, Parameters } from '../Model'
import Axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    // getAll,
    // getById,
};

function login(credentials : Parameters) {
    return Axios.post("https://localhost:44380/api/users/login", {...credentials})
        .then((response: any) => {
            let user : UserData = {...response.data};
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user
        })
}

function register(user : Parameters) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    //return Axios.post("https://localhost:44380/api/users/register", requestOptions ).then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}