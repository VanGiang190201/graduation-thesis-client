import * as httpRequest from './apiClient';

export const getProducts = async () => {
    const path = './products';
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getProductsOfPortfolios = async (id: number) => {
    const path = `./products?portfolios_id=${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsOfCategory = async (id: number) => {
    const path = `./products?category_id=${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductById = async (id: number) => {
    const path = `/products/${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductByName = async (name: string | undefined) => {
    const path = `/products?name_product_like=${name}`;

    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getListProductByType = async (type: string | undefined) => {
    const path = `/products?type_like=${type}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getListImageProduct = async (id: number) => {
    const path = `/products/${id}/images`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getHotSaleProduct = async () => {
    const path = '/products/top-sale';
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const searchProduct = async (keyWork: string | undefined) => {
    const path = `/products?key_word=${keyWork}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
