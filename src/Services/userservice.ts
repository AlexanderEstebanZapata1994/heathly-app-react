// import { authHeader } from '../helpers'
import { Parameters } from '../Model'
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
            let user  = {...response.data};
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user
        })
}

function register(credentials : Parameters) {
    console.log("entre hastas")
    return Axios.post("https://localhost:44380/api/users/register", {...credentials} )
        .then((response : any) => {
            let result =  {...response.data};

            return result;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}