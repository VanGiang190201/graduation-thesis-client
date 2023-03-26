import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import cartSlide from './feature/cartSlide';
import authSlide from './feature/authSlide';
import wishListSlide from './feature/wishListSlide';
import notificationSlide from './feature/notificationSlide';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth: authSlide,
    cart: cartSlide,
    wishList: wishListSlide,
    notification: notificationSlide,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'wishList'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
