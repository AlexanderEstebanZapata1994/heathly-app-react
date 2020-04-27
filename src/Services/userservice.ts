// import { authHeader } from '../helpers'
import { UserRequest } from '../Model'
import Axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    // getAll,
    // getById,
};

function login(credentials : UserRequest) {
    return Axios.post("https://localhost:44380/api/users/login", {...credentials})
        .then((response: any) => {
            let user  = {...response.data};
            return user
        })
}

function register(credentials : UserRequest) {
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