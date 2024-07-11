export const checkRequestKey = (bodyRequest, ...keys) => {
    return keys.every(key => bodyRequest.hasOwnProperty(key));
}