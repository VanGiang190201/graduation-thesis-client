import * as httpRequest from './apiClient';

export const getCommentsProduct = async (id: number) => {
    const path = `/comments?product_id=${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const sendComment = async (body: any) => {
    const path = `/comments/send`;
    try {
        const res = await httpRequest.post(path, body);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteComment = async (id: number) => {
    const path = `/comments/${id}`;
    try {
        const res = await httpRequest.deleteApi(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
