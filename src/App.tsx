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
import { getMessagingToken, onMessageListener } from './firebase/firebase.config';
import { addNewNotification, loadNotification, notificationSlide } from './reudux/feature/notificationSlide';
import Image from './Components/Image';
import * as notificationRequest from './api/notificationApi';
import { IGetNotification, IUser } from './Utils/interface';

function App() {
    const dispatch = useAppDisPatch();
    const location = useLocation();
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const access_token = useAppSelector((state) => state.persistedReducer.auth.dataUser.access_token);
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

    useEffect(() => {
        dispatch(loadNotification(currentUser.id));
    }, [access_token, notificationList?.length]);

    if (access_token) {
        onMessageListener()
            .then((payload: any) => {
                let newNotification = {
                    notification_id: uuidv4(),
                    image: payload.notification.image,
                    title: payload.notification.title,
                    body: payload.notification.body,
                    isReading: false,
                };
                notificationRequest.getListNotificationByUserId(currentUser.id).then((res) => {
                    console.log(res);
                    dispatch(
                        addNewNotification({
                            id: res[0].id,
                            user_id: currentUser.id,
                            notification: [newNotification, ...res[0].notification],
                        }),
                    );
                });
                toast(
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                        <div className="left-content">
                            <h4 style={{ fontWeight: '600' }}>{payload.notification.title}</h4>
                            <p style={{ fontSize: '1.2rem' }}>{payload.notification.body}</p>
                        </div>
                        <div
                            className="right-content"
                            style={{ width: '5rem', height: '5rem', overflow: 'hidden', flexShrink: '0' }}
                        >
                            <Image src={payload.notification.image} alt="" />
                        </div>
                    </div>,
                );
            })
            .catch((err) => console.log('failed: ', err));
    }

    useEffect(() => {
        getMessagingToken().then((res) => dispatch(notificationSlide.actions.setTokenNotification(res)));
        const channel = new BroadcastChannel('notifications');
        channel.addEventListener('message', (event) => {
            const newNotification = {
                notification_id: uuidv4(),
                image: event.data.notification.image,
                title: event.data.notification.title,
                body: event.data.notification.body,
                isReading: false,
            };
            notificationRequest.getListNotificationByUserId(currentUser.id).then((res) => {
                dispatch(
                    addNewNotification({
                        id: res[0].id,
                        user_id: currentUser.id,
                        notification: [newNotification, ...res[0].notification],
                    }),
                );
            });
        });
    }, []);
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
