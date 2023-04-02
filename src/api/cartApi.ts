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

export const deleteCart = async (id: number) => {
    try {
        const res = await httpRequest.deleteApi(`/cart/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateQuantityCart = async (data: object, id: string) => {
    try {
        const res = await httpRequest.post(`/cart/${id}`, data);
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
