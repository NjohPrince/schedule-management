import { createSlice } from '@reduxjs/toolkit';
import { ErrorMessage, StatisticsType } from '../../../types';
import { getStatsFunc } from '../thunk/getStatsThunkAPI';

export interface initialStateType {
    statistics: StatisticsType;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    message: string;
}

const initialState: initialStateType = {
    statistics: {} as StatisticsType,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

const getStatsSlice = createSlice({
    name: 'getStatsSlice',
    initialState: initialState,
    reducers: {
        resetStatsState: (state) => {
            state.statistics = {} as StatisticsType;
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStatsFunc.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getStatsFunc.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.statistics = payload.stats;
            })
            .addCase(getStatsFunc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = (action.payload as ErrorMessage)?.error;
            });
    },
});

export const { resetStatsState } = getStatsSlice.actions;
export default getStatsSlice.reducer;
