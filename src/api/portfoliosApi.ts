import * as httpRequest from './apiClient';

export const getListPortfolios = async () => {
    const path = "/portfolios";
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);

    }
}