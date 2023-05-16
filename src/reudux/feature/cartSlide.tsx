import { createSlice, current } from '@reduxjs/toolkit';
import { IProduct } from '../../Utils/interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as cartRequest from '../../api/cartApi';
import * as productRequest from '../../api/productApi';
import { toast } from 'react-toastify';

const initialState = {
    listCart: [{}],
    isChangeMoney: false,
    ship: {},
};

export const addCart = createAsyncThunk('cart/add-new', async (data: object, thunkAPI) => {
    try {
        const res = await cartRequest.addCart(data);
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const deleteCart = createAsyncThunk('cart/detelecart', async (id: number, thunkAPI) => {
    try {
        const res = await cartRequest.deleteCart(id);
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const updateQuantityCart = createAsyncThunk('cart/updatecart', async (data: object, thunkAPI) => {
    try {
        const { id, number }: any = data;
        const res = await cartRequest.updateQuantityCart(number, id);
        return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});
export const cartSlide = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsChangeMoney: (state, action) => {
            state.isChangeMoney = action.payload;
        },
        setShip: (state, action) => {
            state.ship = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(loadCart.fulfilled, (state, action) => {
        //     state.listCart = action.payload;
        // });
        builder.addCase(addCart.fulfilled, (state, action) => {
            state.listCart = action.payload.data;
        });

        builder.addCase(deleteCart.fulfilled, (state, action) => {
            state.listCart = action.payload.cart;
        });
        builder.addCase(updateQuantityCart.fulfilled, (state, action) => {
            state.listCart = action.payload.cart;
            // toast.success('Update quantity susses ✔', {
            //     position: 'top-right',
            //     autoClose: 1000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     draggable: true,
            //     progress: undefined,
            // });
        });
    },
});

export default cartSlide.reducer;
