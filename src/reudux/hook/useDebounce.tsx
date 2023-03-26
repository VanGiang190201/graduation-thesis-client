import { useState, useEffect } from 'react';
import { useAppDisPatch } from '.';
import { addCart } from '../feature/cartSlide';

const Debounce = (value: any, delay: number) => {
    const dispatch = useAppDisPatch();

    useEffect(() => {
        const handle = setTimeout(() => dispatch(addCart(value)), delay);
        return () => clearTimeout(handle);
    }, [value]);
};

export default Debounce;
