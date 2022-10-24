import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// styleeheet
import styles from './search.module.css';

const SearchComponent = () => {
    return (
        <div className={styles.search}>
            <div className={styles.headline}>
                <h2>Appointments</h2>
                <div className={styles.input}>
                    <input name="search" placeholder="Search" type="text" />
                    <div className={styles.icon}>
                        <AiOutlineSearch size={20} color="var(--gray-color)" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
