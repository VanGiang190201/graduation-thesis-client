import * as httpRequest from './apiClient';

export const addOrder = async (data: any) => {
    try {
        const res = await httpRequest.post(`/orders/payment`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const listOrder = async () => {
    try {
        const res = await httpRequest.get(`/orders`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProducts = async (id: number) => {
    try {
        const res = await httpRequest.get(`orders/${id}/products-order`);
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

export const deleteOrder = async (id: number) => {
    try {
        const res = await httpRequest.deleteApi(`orders/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
