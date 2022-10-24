import React from 'react';

// stylesheet
import styles from './navbar.module.css';

const NavbarComponent: React.FC = () => {
    return (
        <header>
            <nav className={styles.navbar}>NavbarComponent</nav>
        </header>
    );
};

export default NavbarComponent;
