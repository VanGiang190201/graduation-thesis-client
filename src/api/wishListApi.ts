import * as httpRequest from './apiClient';

export const getWishListByUserId = async (id: string) => {
    try {
        const res = httpRequest.get(`/wishlists?user_id=${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const addProductToWishList = async (data: object, wishListId: string) => {
    try {
        const res = await httpRequest.patch(`/wishlists/${wishListId}`, data);
        return res;
    } catch (error) {
        console.log(error);

    }
}
export const deleteProductToWishList = async (data: object, wishListId: string) => {
    try {
        const res = await httpRequest.patch(`/wishlists/${wishListId}`, data);
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const addNewWishList = async (data: object) => {
    const path: string = '/wishlists'
    try {
        const res = await httpRequest.post(path, data)
        return res;
    } catch (error) {
        console.log(error);
    }
}