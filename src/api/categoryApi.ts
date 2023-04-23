import * as httpRequest from './apiClient';

export const getListCategory = async () => {
    const path = '/category';
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getCategoryItem = async (id: number) => {
    const path = `/category/${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getListCategoryByPortfolios = async (id: number) => {
    const path = `/category?portfolios_id=${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
