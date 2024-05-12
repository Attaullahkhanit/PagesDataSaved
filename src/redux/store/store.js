import { configureStore } from '@reduxjs/toolkit';
import dispatcherSettingsReducer from '../slice/dispatcherSettingsSlice';

export const store = configureStore({
  reducer: {
    dispatcherSettings: dispatcherSettingsReducer,
  },
});
