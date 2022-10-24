import { Middleware } from 'redux';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    const returnValue = next(action);
    console.group(action.type);
    console.log('The action: ', action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return returnValue;
};

export default loggerMiddleware;
