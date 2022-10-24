import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// constants
import { CONSTANTS } from '../../../constants/Constants';

// error handling utility
import { handleErrorMessages } from '../../errorHandling/ErrorHandling';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export const getStatsFunc = createAsyncThunk('/get-stats', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${CONSTANTS.ENV_VARIABLES.server_url}/appointments/stats`, config);
        return response?.data;

        // eslint-disable-next-line
    } catch (error: any) {
        return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
});
