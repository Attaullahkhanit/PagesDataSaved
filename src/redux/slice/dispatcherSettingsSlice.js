import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  operation: {
    labelDesired: '',
    operateBusiness: false,
    selectedOption: null,
  },
  preference: {
    wantPreference: false,
    topPreference: false,
  },
  drivers: {
    driverName: '',
    emailAddress: '',
  },
  breaks: {
    weightInKg: '',
    hasBreaks: false,
  },
};

export const dispatcherSettingsSlice = createSlice({
  name: 'dispatcherSettings',
  initialState,
  reducers: {
    updateOperation: (state, action) => {
      state.operation = { ...state.operation, ...action.payload };
    },
    updatePreference: (state, action) => {
      state.preference = { ...state.preference, ...action.payload };
    },
    updateDrivers: (state, action) => {
      state.drivers = { ...state.drivers, ...action.payload };
    },
    updateBreaks: (state, action) => {
      state.breaks = { ...state.breaks, ...action.payload };
    },
  },
});

export const {
  updateOperation,
  updatePreference,
  updateDrivers,
  updateBreaks,
} = dispatcherSettingsSlice.actions;

export default dispatcherSettingsSlice.reducer;
