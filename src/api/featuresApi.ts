import * as httpRequest from './apiClient';

export const getListFeature = async () => {
    const path = '/features';
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getFeatureItem = async (id: number) => {
    const path = `/features/${id}`;
    try {
        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
};
