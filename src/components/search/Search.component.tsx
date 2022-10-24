import React from 'react';

// styleeheet
import styles from './search.module.css';

const SearchComponent = () => {
    return (
        <div className={styles.search}>
            <div className={styles.headline}>
                <h2>Appointments</h2>
                <input name="search" placeholder="Search" type="text" />
            </div>
        </div>
    );
};

export default SearchComponent;
