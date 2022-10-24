import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// constants
import { CONSTANTS } from '../../../constants/Constants';

// types
import { AppointmentEntityType } from '../../../types/models';

// error handling utility
import { handleErrorMessages } from '../../errorHandling/ErrorHandling';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export const createAppointmentFunc = createAsyncThunk(
    '/create-appointment',
    async (body: AppointmentEntityType, thunkAPI) => {
        try {
            const response = await axios.post(`${CONSTANTS.ENV_VARIABLES.server_url}/appointments`, body, config);
            return response?.data;

            // eslint-disable-next-line
        } catch (error: any) {
            return thunkAPI.rejectWithValue(handleErrorMessages(error));
        }
    },
);

export const getAllAppointmentsFunc = createAsyncThunk('/get-appointments', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${CONSTANTS.ENV_VARIABLES.server_url}/appointments`, config);
        return response?.data;

        // eslint-disable-next-line
    } catch (error: any) {
        return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
});
