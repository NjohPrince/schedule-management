import { createSlice } from '@reduxjs/toolkit';
import { AppointmentEntityType } from '../../../types/models';
import { createAppointmentFunc, getAllAppointmentsFunc } from '../thunk/appointmentThunkAPI';
import { ErrorMessage } from '../../../types';

export interface initialStateType {
    appointments: AppointmentEntityType[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string;
}

const initialState: initialStateType = {
    appointments: [] as AppointmentEntityType[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

const appointmentSlice = createSlice({
    name: 'appointmentSlice',
    initialState: initialState,
    reducers: {
        resetState: (state) => {
            state.appointments = [] as AppointmentEntityType[];
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAppointmentFunc.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(createAppointmentFunc.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = payload.message;
            })
            .addCase(createAppointmentFunc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = (action.payload as ErrorMessage)?.error;
            })
            .addCase(getAllAppointmentsFunc.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getAllAppointmentsFunc.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.appointments = payload.appointments;
            })
            .addCase(getAllAppointmentsFunc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = (action.payload as ErrorMessage)?.error;
            });
    },
});

export const { resetState } = appointmentSlice.actions;
export default appointmentSlice.reducer;
