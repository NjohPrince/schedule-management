import React from 'react';

// stylesheet
import styles from './navbar.module.css';

const NavbarComponent: React.FC = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.text}>
                    <span>Dr Ngwashi</span>
                    <span>Patients</span>
                </div>
            </nav>
        </header>
    );
};

export default NavbarComponent;
