import { configureStore } from '@reduxjs/toolkit';

// middleware
import middlewareArray from './middlewareArray';

// root reducers
import rootReducer from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(middlewareArray),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
