import * as httpRequest from './apiClient'
export const getListUser = async () => {
    const path = "/users";
    try {

        const res = await httpRequest.get(path);
        return res;
    } catch (error) {
        console.log(error);
    }
}