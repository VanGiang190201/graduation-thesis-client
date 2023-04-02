import * as httpRequest from './apiClient';

export const getImageByCodeID = async (codeId: string) => {
    try {
        const res = await httpRequest.get(`/images?code_id=${codeId}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
