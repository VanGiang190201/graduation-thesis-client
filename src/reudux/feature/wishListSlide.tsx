import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as wishListRequest from '../../api/wishListApi';

const initialState = {
    listWish: [{}],
};

export const loadWishList = createAsyncThunk('wish-list/load-wish-list', async (id: string, thunkAPI) => {
    try {
        if (id !== undefined) {
            const wishList = await wishListRequest.getWishListByUserId(id);
            return wishList.length > 0 ? wishList[0].wishlist : wishList;
        }
        return [{}];
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const addProductToWishList = createAsyncThunk('wish-list/add-to-wish-list', async (data: object, thunkAPI) => {
    try {
        const { id, ...newWishList }: any = data;
        const wishLists = await wishListRequest.addProductToWishList(newWishList, id);
        return wishLists[0].wishlist;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});
export const deleteProductToWishList = createAsyncThunk(
    'wish-list/delete-product-from-wish-list',
    async (data: object, thunkAPI) => {
        try {
            const { id, ...newWishList }: any = data;
            const wishLists = await wishListRequest.deleteProductToWishList(newWishList, id);
            return wishLists[0].wishlist;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    },
);

export const wishListSlice = createSlice({
    name: 'wish-list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadWishList.fulfilled, (state, action) => {
            state.listWish = action.payload;
        });

        builder.addCase(addProductToWishList.fulfilled, (state, action) => {
            state.listWish = action.payload;
        });

        builder.addCase(deleteProductToWishList.fulfilled, (state, action) => {
            state.listWish = action.payload;
        });
    },
});

export default wishListSlice.reducer;
