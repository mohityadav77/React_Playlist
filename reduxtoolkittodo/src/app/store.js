import { configureStore } from "@reduxjs/toolkit";
import todoReduer from '../features/todo/TodoSlice';
export const store = configureStore({
    reducer: todoReduer
}) 