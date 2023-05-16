import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uuidv4 } from '@firebase/util';

import DefaultLayout from './Layouts/DefaultLayout';
import { useAppSelector } from './reudux/hook';
import { useAppDisPatch } from './reudux/hook';
// import { apiClient } from './api/apiClient';
// import { loadCart } from './reudux/feature/cartSlide';
import { loadWishList } from './reudux/feature/wishListSlide';
import { publicRoutes, privateRoutes, BlockRoute } from './routes';
import { BlockRouter, ProtectRouter } from './routes/CustomRoute';
import { IGetNotification, IUser } from './Utils/interface';
import { getStoredAuth } from './Utils/helper/localStorage';

function App() {
    const dispatch = useAppDisPatch();
    const location = useLocation();
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const access_token = useAppSelector((state) => state.persistedReducer.auth.dataUser.access_token);
    const auth = getStoredAuth();
    const wishList: any = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const notificationList: IGetNotification[] = useAppSelector(
        (state) => state.persistedReducer.notification.listNotification,
    );

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    // useEffect(() => {
    //     dispatch(loadCart(currentUser.id));
    // }, [access_token, cart?.length]);

    useEffect(() => {
        dispatch(loadWishList(currentUser?.id));
    }, [access_token, wishList?.length]);

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page: React.FunctionComponent<any> = route.component;
                    const Layout = DefaultLayout;
                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                            key={index}
                        />
                    );
                })}
                <Route element={<BlockRouter />}>
                    {BlockRoute.map((route, index) => {
                        const Page: React.FunctionComponent<any> = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Route>
                <Route element={<ProtectRouter />}>
                    {privateRoutes.map((route, index) => {
                        const Page: React.FunctionComponent<any> = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
