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

// export const loadCart = createAsyncThunk('cart/loadcart', async (id: any, thunkAPI) => {
//     try {
//         const res = await cartRequest.getListCart();
//         let list: any = [];
//         let listCart = res[0].cart;
//         let duplicateCartItem: any = {};
//         let notSameCartItem = [];
//         for (let i = 0; i < listCart.length - 1; i++) {
//             for (let j = i + 1; j < listCart.length; j++) {
//                 if (listCart[i].product_id === listCart[j].product_id) {
//                     duplicateCartItem = {
//                         product_id: listCart[i].product_id,
//                         color: listCart[i].color,
//                         amount: listCart[i].amount + listCart[j].amount,
//                         size: listCart[i].size,
//                         sub_total: listCart[i].sub_total + listCart[j].sub_total,
//                     };
//                 }
//             }
//         }
//         for (let i = 0; i < listCart.length; i++) {
//             if (listCart[i].product_id !== duplicateCartItem.product_id) {
//                 notSameCartItem.push(listCart[i]);
//             }
//         }

//         if (Object.keys(duplicateCartItem).length === 0) {
//             list = [...listCart];
//         } else {
//             list = [...notSameCartItem, duplicateCartItem];
//         }
//         thunkAPI.dispatch(
//             updateQuantityCart({
//                 id: res[0].id,
//                 user_id: id,
//                 cart: [...list],
//             }),
//         );
//         return list;
//     } catch (error) {
//         thunkAPI.rejectWithValue(error);
//     }
// });

export const addCart = createAsyncThunk('cart/add-new', async (data: object, thunkAPI) => {
    try {
        const res = await cartRequest.addCart(data);
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const deleteCart = createAsyncThunk('cart/detelecart', async (data: object, thunkAPI) => {
    try {
        const { id, ...cartUser }: any = data;
        const res = await cartRequest.deleteCart(cartUser, id);
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const updateQuantityCart = createAsyncThunk('cart/updatecart', async (data: object, thunkAPI) => {
    try {
        const { id, ...cartUser }: any = data;
        const res = await cartRequest.updateCart(cartUser, id);
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
