import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../reudux/hook';

export const BlockRouter = () => {
    const auth = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    return Object.keys(auth).length > 0 ? <Navigate to={'/'} replace /> : <Outlet />;
};

export const ProtectRouter = () => {
    const auth = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    return Object.keys(auth).length > 0 ? <Outlet /> : <Navigate to={'/login'} replace />;
};
