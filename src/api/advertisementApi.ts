import * as  httpRequest from './apiClient';

export const getAds = async () => {
    const path: string = "/advertisements";
    try {
        const res = await httpRequest.get(path);
        console.log(res);

        return res;
    } catch (error) {
        console.log(error);

    }
}
export const getAdIsUsed = async () => {
    const path: string = "/advertisements/is-used";
    try {
        const res = await httpRequest.get(path);
        console.log(res);

        return res;
    } catch (error) {
        console.log(error);

    }
}
