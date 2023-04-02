import * as httpRequest from './apiClient';

export const getWishList = async () => {
    try {
        const res = httpRequest.get(`/wishlist`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const isItemWishList = async (id: number) => {
    try {
        const res = httpRequest.get(`/wishlist?product_id=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateWishList = async (id: number) => {
    try {
        const res = httpRequest.post(`/wishlist?product_id=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addProductToWishList = async (data: object, wishListId: string) => {
    try {
        const res = await httpRequest.patch(`/wishlists/${wishListId}`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const deleteProductToWishList = async (data: object, wishListId: string) => {
    try {
        const res = await httpRequest.patch(`/wishlists/${wishListId}`, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addNewWishList = async (data: object) => {
    const path: string = '/wishlists';
    try {
        const res = await httpRequest.post(path, data);
        return res;
    } catch (error) {
        console.log(error);
    }
};
