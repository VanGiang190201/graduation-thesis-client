import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch } from '../store';
import { RootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDisPatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
