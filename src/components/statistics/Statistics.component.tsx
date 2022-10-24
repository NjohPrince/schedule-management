import React, { useEffect } from 'react';

// extra
import Grid from '../../layout/Grid.layout';
import StatisticCardComponent from '../card/StatisticCard.component';
import { useDispatch, useSelector } from '../../hooks';
import { getStatsFunc } from '../../features/appointment/thunk/getStatsThunkAPI';

// stylesheet
import styles from './statistic.module.css';
import { RootState } from '../../app/store';

const StatisticsComponent = () => {
    const dispatch = useDispatch();
    const getStatsState = useSelector((state: RootState) => state.getStatsSlice);
    const { isError, isLoading, isSuccess, message, statistics } = getStatsState;

    useEffect(() => {
        if (isError) {
            alert(message);
        }
    }, [isError, isLoading, isSuccess, message]);

    useEffect(() => {
        dispatch(getStatsFunc());
    }, []);

    return (
        <div className={styles.statistics}>
            <Grid column={3} gap={2} dropToOne={true}>
                <StatisticCardComponent
                    statHeadline="Pending"
                    statValue={`${isLoading ? '...' : statistics.pending}`}
                />
                <StatisticCardComponent
                    statHeadline="Rescheduled"
                    statValue={`${isLoading ? '...' : statistics.rescheduled}`}
                />
                <StatisticCardComponent statHeadline="Passed" statValue={`${isLoading ? '...' : statistics.passed}`} />
            </Grid>
        </div>
    );
};

export default StatisticsComponent;
