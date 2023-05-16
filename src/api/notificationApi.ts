import { async } from '@firebase/util';
import * as httpRequest from './apiClient';

export const getListNotification = async () => {
    try {
        const res = httpRequest.get(`/notification`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const isReading = async (id: number) => {
    try {
        const res = await httpRequest.post(`/notification/${id}/read`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const deleteNotification = async (id: number) => {
    try {
        const res = await httpRequest.deleteApi(`/notification/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
