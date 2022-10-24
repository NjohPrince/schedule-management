import React from 'react';

// stylesheet
import styles from './loadingoverlay.module.css';

const LoadingOverlayComponent = () => {
    return (
        <div className={styles.loading__overlay}>
            <div className={styles.loader}>
                <div className={styles.ellipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlayComponent;
