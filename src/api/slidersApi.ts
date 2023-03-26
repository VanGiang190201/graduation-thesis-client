import * as  httpRequest from './apiClient';

export const getSliders = async () => {
    const path: string = "/sliders";
    try {
        const res = await httpRequest.get(path);
        console.log(res);

        return res;
    } catch (error) {
        console.log(error);

    }
}
