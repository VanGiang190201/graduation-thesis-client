import * as httpRequest from './apiClient';

export const listVideoProduct = async (product_id: number) => {
    try {
        const res = await httpRequest.get(`/video?product_id=${product_id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const allVideo = async () => {
    try {
        const res = await httpRequest.get(`/video`);
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
