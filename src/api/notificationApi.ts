import { async } from '@firebase/util';
import * as httpRequest from './apiClient';

export const getListNotificationByUserId = async (id: string) => {
    try {
        const res = httpRequest.get(`/notifications?user_id=${id}`)
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const addNewNotification = async (data: object, notification_id: string) => {
    try {
        const res = await httpRequest.patch(`/notifications/${notification_id}`, data);
        return res;
    } catch (error) {
        console.log(error);

    }
}

export const isReadingNotification = async (data: object, notification_id: string) => {
    try {
        const res = await httpRequest.patch(`/notifications/${notification_id}`, data);
        return res;
    } catch (error) {
        console.log(error);

    }
}
export const addNewNotificationUSer = async (data: object) => {
    const path: string = '/notifications'
    try {
        const res = await httpRequest.post(path, data)
        return res;
    } catch (error) {
        console.log(error);
    }
}


