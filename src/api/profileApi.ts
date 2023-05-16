import * as httpRequest from './apiClient';

export const getProfile = async () => {
    const path: string = '/profile';
    try {
        const res = await httpRequest.get(path);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (data: any) => {
    const path: string = '/profile';
    try {
        const res = await httpRequest.postFormData(path, data);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateDeviceToken = async (token: any) => {
    const path = '/profile/device-token';
    console.log(token);

    try {
        const res = await httpRequest.post(path, { token });
        return res;
    } catch (error) {
        console.log(error);
    }
};
