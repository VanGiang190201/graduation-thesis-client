import axios, { AxiosRequestConfig } from 'axios';
import config from '../config';
import { clearStoredAuth, getStoredAuth } from '../Utils/helper/localStorage';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeoutErrorMessage: '🚧🚧🚧 Server connection time out !',
    headers: {
        Accept: 'application/json',
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        responseEncoding: 'utf8',
        responseType: 'json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*',
        'X-Application': 'web app',
        'X-Version': '1.0.1',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
});

export const instanceRequest = (options: AxiosRequestConfig) => {
    const token = getStoredAuth();
    instance.defaults.headers.common.Authorization = `Bearer ${token}` || undefined;

    const onSuccess = (response: any) => {
        // logger.debug('Response API:', response?.data);
        return response?.data;
    };
    const onError = async (error: any) => {
        if (error?.response?.status === 401) {
            //  if(error?.response?.data. )
            clearStoredAuth();
            window.location.href = window.location.origin;
        }
        // logger.debug('Axios Options:', options);
        // optionally catch errors and add additional logging here
        await Promise.reject({
            statusCode: error?.response?.data?.statusCode,
            message: error?.response?.data?.message,
            statusText: error?.response?.statusText,
            status: error?.response?.status,
            data: error?.response?.data?.data || null,
        });
    };
    return instance(options).then(onSuccess).catch(onError);
};

//Instance method custom
export const get = async (path: string, option?: object) => {
    const responsive = await instanceRequest({
        url: path,
        method: 'GET',
    });
    return responsive;
};

export const post = async (path: string, data?: any, option?: object) => {
    const responsive = await instanceRequest({
        url: path,
        method: 'POST',
        data,
    });
    return responsive;
};

export const deleteApi = async (path: string, option?: object) => {
    const responsive = await instanceRequest({
        url: path,
        method: 'DELETE',
    });
    return responsive;
};

export const put = async (path: string, data?: any) => {
    const responsive = await instanceRequest({
        url: path,
        method: 'PUT',
        data,
    });
    return responsive;
};
export const patch = async (path: string, data?: any) => {
    const responsive = await instanceRequest({
        url: path,
        method: 'PATCH',
        data,
    });
    return responsive;
};
