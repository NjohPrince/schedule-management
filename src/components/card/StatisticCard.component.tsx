import React from 'react';

// stylesheet
import styles from './card.module.css';

type Props = {
    statHeadline: string;
    statValue: string;
    statBgColor?: string;
    statHeadlineColor?: string;
    statValueColor?: string;
};

const StatisticCardComponent = ({ statHeadline, statValue, statBgColor, statHeadlineColor, statValueColor }: Props) => {
    return (
        <div style={{ background: statBgColor ? statBgColor : '#F4F4F4' }} className={styles.card}>
            <h3 style={{ color: statHeadlineColor ? statHeadlineColor : 'var(--gray-color)' }}>{statHeadline}</h3>
            <h2 style={{ color: statValueColor ? statValueColor : 'var(--gray-color)' }}>{statValue}</h2>
        </div>
    );
};

export default StatisticCardComponent;
