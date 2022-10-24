import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

// stylesheet
import styles from './landing.module.css';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';
import SearchComponent from '../../components/search/Search.component';
import StatisticsComponent from '../../components/statistics/Statistics.component';
import { CONSTANTS } from '../../constants/Constants';

const LandingPage: React.FC = () => {
    return (
        <div className={styles.landing}>
            <NavbarComponent />
            <SearchComponent />
            <StatisticsComponent />

            <div className={styles.add}>
                <Link to={CONSTANTS.PATHS.add_new_appointment}>
                    <Button
                        title="New Appointment"
                        style={{
                            padding: '2rem',
                            fontSize: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        type="primary"
                    >
                        +
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
