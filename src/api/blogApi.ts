import * as httpRequest from './apiClient';

export const getBlogs = async () => {
    const path = '/blogs';
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getBlog = async (id: number) => {
    const path = `/blogs/${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
