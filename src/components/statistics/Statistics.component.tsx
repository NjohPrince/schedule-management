import React from 'react';
import Grid from '../../layout/Grid.layout';
import StatisticCardComponent from '../card/StatisticCard.component';

// stylesheet
import styles from './statistic.module.css';

const StatisticsComponent = () => {
    return (
        <div className={styles.statistics}>
            <Grid column={3} gap={2} dropToOne={true}>
                <StatisticCardComponent statHeadline="Missed" statValue="15" />
                <StatisticCardComponent statHeadline="Rescheduled" statValue="21" />
                <StatisticCardComponent statHeadline="Passed" statValue="05" />
            </Grid>
        </div>
    );
};

export default StatisticsComponent;
