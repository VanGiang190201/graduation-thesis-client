import * as httpRequest from './apiClient';

export const getMeetings = async () => {
    try {
        const res = await httpRequest.get(`/meeting`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addMeeting = async (body: any) => {
    try {
        const res = await httpRequest.post(`/meeting`, body);
        return res;
    } catch (error) {
        return error;
    }
};
