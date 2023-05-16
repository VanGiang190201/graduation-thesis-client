import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authenApi } from '../../api/authApi';
import { addNewCart } from '../../api/cartApi';
import { addNewWishList } from '../../api/wishListApi';
import { IUser } from '../../Utils/interface';
import { clearStoredAuth, setStoredAuth } from '../../Utils/helper/localStorage';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { getMessagingToken } from '../../firebase/firebase.config';
import { updateDeviceToken } from '../../api/profileApi';

interface IBody {
    email: string;
    password: string;
}

const initialState = {
    dataUser: {} || { access_token: '', user_name: '', display_name: '', email: '', id: 0 },
    isLoading: true,
};

export const login = createAsyncThunk('auth/login', async (body: any, thunkAPI) => {
    try {
        const res = await authenApi.login(body);
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const registerUser = createAsyncThunk('auth/register', async (body: any, thunkAPI) => {
    try {
        const res = await authenApi.register(body);
        if (Object.keys(res).length > 0) {
            thunkAPI.dispatch(
                await addNewWishList({
                    user_id: res.id,
                    wishlist: [],
                }).then(
                    thunkAPI.dispatch(
                        await addNewCart({
                            user_id: res.id,
                            cart: [],
                        }),
                    ),
                ),
            );
        }
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.dataUser = {};
            clearStoredAuth();
            window.location.href = config.login;
        },
        logInWithFireBase: (state, action) => {
            state.dataUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);

            setStoredAuth(action.payload.access_token);
            getMessagingToken(updateDeviceToken);
            state.dataUser = { ...action.payload };
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {});
    },
});

export default authSlide.reducer;
