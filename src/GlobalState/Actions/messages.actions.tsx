import { messagesConstants } from '../constants'

export const  messagesActions = {
    success,
    error,
    clear
};


function success(message : string) {
    return { type: messagesConstants.SUCCESS, message };
}

function error(message : string) {
    return { type: messagesConstants.ERROR, message };
}

function clear() {
    return { type: messagesConstants.CLEAR };
}