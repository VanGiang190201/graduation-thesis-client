import * as httpRequest from './apiClient';

export const checkout = async (data: any) => {
    try {
        const res = await httpRequest.post(`/payment/checkout`, data);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const returnData = async () => {
    try {
        const res = await httpRequest.get(`/payment/return`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
