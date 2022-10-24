import React from 'react';

// stylesheet
import styles from './grid.module.css';

interface Props {
    column: number;
    gap: number;
    children: React.ReactNode[] | React.ReactNode;
    dropToOne: boolean;
}

const Grid: React.FC<Props> = ({ column, gap, children, dropToOne }) => {
    return (
        <div
            style={{ gap: `${gap}rem` }}
            className={`${styles.grid} ${dropToOne ? styles.drop : ''} ${
                column === 2 ? styles.grid__2 : column === 3 ? styles.grid__3 : styles.grid__4
            }`}
        >
            {children}
        </div>
    );
};

export default Grid;
