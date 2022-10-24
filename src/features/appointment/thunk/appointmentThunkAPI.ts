import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// constants
import { CONSTANTS } from '../../../constants/Constants';

// types
import { AppointmentEntityType } from '../../../types/models';

// eslint-disable-next-line
export const handleErrorMessages = (error: any) => {
    let message;
    if (error.message && error.code === 'ERR_NETWORK') {
        return {
            error: error.message,
        };
    }
    if (axios.isAxiosError(error)) {
        console.log('IS AXIOS ERROR');
        if (error.response && error.response.data) {
            message = error.response.data;
        }
        return message;
    } else {
        if (error.message) {
            message = error;
        } else {
            message = error;
        }
    }

    return message;
};

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
            console.log('REQUEST_ERROR: ', error);
            return thunkAPI.rejectWithValue(handleErrorMessages(error));
        }
    },
);
