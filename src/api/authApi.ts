import * as httpRequest from './apiClient';
import { IBodyLogin } from "../Utils/interface";
import { IBodyRegister } from "../Utils/interface";
import axios from 'axios';
import { toast } from 'react-toastify';



export const authenApi = {
    login: async (body: IBodyLogin) => {
        const path: string = "/auth/login"
        try {
            const res = await httpRequest.post(path, body);
            console.log(res);
            return res;
        } catch (error: any) {
            toast.error(error.response.data.message ? error.response.data.message : "Error login ", {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
        // const { onNavigate } = body;
        // let listUser = await getListUser();

        // let currentUser = {};
        // for (let i = 0; i < listUser.length; i++) {
        //     if (body.email === listUser[i].email && body.password === listUser[i].password) {
        //         currentUser = listUser[i];
        //         onNavigate()
        //     }
        // }
        // return currentUser;
    },
    register: async (body: IBodyRegister) => {
        const path: string = "/users";
        try {
            const res = await httpRequest.post(path, body);
            return res;
        }
        catch (error) {
            console.log(error)
        }
    }
}
