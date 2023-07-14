import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatchType, StateType } from '../../types/states/state.type';

export const useAppDispatch: () => AppDispatchType = () =>
  useDispatch<AppDispatchType>();

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
