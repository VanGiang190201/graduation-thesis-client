import * as httpRequest from './apiClient';
import { IBodyLogin } from '../Utils/interface';
import { IBodyRegister } from '../Utils/interface';
import axios from 'axios';
import { toast } from 'react-toastify';

export const authenApi = {
    login: async (body: IBodyLogin) => {
        const path: string = '/auth/login';
        try {
            const res = await httpRequest.post(path, body);
            console.log(res);
            return res;
        } catch (error: any) {
            toast.error(error.message, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    },
    register: async (body: IBodyRegister) => {
        const path: string = '/auth/register';
        try {
            const res = await httpRequest.post(path, body);
            return res;
        } catch (error) {
            console.log(error);
        }
    },

    sendMail: async (body: { email: string }) => {
        const path: string = '/reset/send-mail';
        try {
            const res = await httpRequest.post(path, body);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    sendCodeVerify: async (body: { email: string; codeVerify: number }) => {
        const path: string = '/reset/send-verify';
        try {
            const res = await httpRequest.post(path, body);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    changeNewPass: async (body: { email: string; password: string }) => {
        const path: string = '/reset/send-new-pass';
        try {
            const res = await httpRequest.post(path, body);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
};
