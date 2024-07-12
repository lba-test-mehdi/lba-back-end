export const checkRequestKey = (bodyRequest, ...keys) => {
    return keys.every(key => !!Object.getOwnPropertyDescriptor(bodyRequest, key));
}