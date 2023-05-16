import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../reudux/hook';
import { getStoredAuth } from '../Utils/helper/localStorage';

// const auth = getStoredAuth();

// console.log(auth);

export const BlockRouter = () => {
    const auth = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    return Object.keys(auth).length ? <Navigate to={'/'} replace /> : <Outlet />;
};

export const ProtectRouter = () => {
    const auth = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    return Object.keys(auth).length ? <Outlet /> : <Navigate to={'/login'} replace />;
};
