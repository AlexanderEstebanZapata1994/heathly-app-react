import { messagesConstants } from '../constants'

export const  messagesActions = {
    success,
    error,
    clear
};


function success(payload : string) {
    return { type: messagesConstants.SUCCESS, payload };
}

function error(payload : string) {
    return { type: messagesConstants.ERROR, payload };
}

function clear() {
    return { type: messagesConstants.CLEAR };
}