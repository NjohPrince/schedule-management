import React from 'react';

// stylesheet
import styles from './new.module.css';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';

const NewAppointment: React.FC = () => {
    return (
        <div className={styles.add__new}>
            <NavbarComponent />
        </div>
    );
};

export default NewAppointment;
