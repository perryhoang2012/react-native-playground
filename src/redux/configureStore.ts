import {configureStore, combineReducers} from '@reduxjs/toolkit';
import GeneralSlice from './slices/GeneralSlice';

const reducer = combineReducers({
  GeneralSlice,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
