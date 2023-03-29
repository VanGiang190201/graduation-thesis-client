import * as httpRequest from './apiClient';

export const getListCart = async () => {
    try {
        const res = await httpRequest.get(`/cart`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addCart = async (data: object) => {
    try {
        const res = await httpRequest.post(`/cart/add-new`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCart = async (data: object, cartId: string) => {
    try {
        const res = await httpRequest.put(`/cart/${cartId}`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateCart = async (data: object, cartId: string) => {
    try {
        const res = await httpRequest.put(`/carts/${cartId}`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addNewCart = async (data: object) => {
    const path: string = '/carts';
    try {
        const res = await httpRequest.post(path, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
