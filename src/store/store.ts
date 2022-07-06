import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { boardSlice } from './boardSlice'
import { figuresSlice } from './figuresSlice'
import { selectedSlice } from './selectedSlice'

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    figures: figuresSlice.reducer,
    selectedFigure: selectedSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
