import axios from "axios";


// Create an instance axios
const getAccessToken = () => {
    const localStoreAuth = JSON.parse(JSON.parse(localStorage.getItem('persist:root') || '')?.auth);
    return localStoreAuth?.dataUser?.access_token;
}


export let apiClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
    }
});

if (getAccessToken() !== undefined) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
}
//Instance method custom
export const get = async (path: string, option?: object) => {
    const responsive = await apiClient.get(path, option);
    return responsive.data;
}

export const post = async (path: string, data: object, option?: object) => {
    const responsive = await apiClient.post(path, data, option);
    return responsive.data;
}

export const deleteApi = async (path: string, option?: object) => {
    const responsive = await apiClient.delete(path, option);
    return responsive.data;
}

export const put = async (path: string, option?: object) => {
    const responsive = await apiClient.put(path, option)
    return responsive.data;
}
export const patch = async (path: string, option?: object) => {
    const responsive = await apiClient.put(path, option)
    return responsive.data;
}



