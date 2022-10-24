import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'antd';

// stylesheet
import styles from './landing.module.css';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';
import SearchComponent from '../../components/search/Search.component';
import StatisticsComponent from '../../components/statistics/Statistics.component';

import { CONSTANTS } from '../../constants/Constants';
import { useDispatch, useSelector } from '../../hooks';
import { RootState } from '../../app/store';
import { getAllAppointmentsFunc } from '../../features/appointment/thunk/appointmentThunkAPI';
import LoadingOverlayComponent from '../../components/loading-overlay/LoadingOverlay.component';

const LandingPage: React.FC = () => {
    const appointmentState = useSelector((state: RootState) => state.appointmentSlice);
    const { isError, isLoading, isSuccess, message, appointments } = appointmentState;
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAppointmentsFunc());
    }, [location]);

    useEffect(() => {
        if (isError) {
            alert(message);
        }
    }, [isError, isLoading, isSuccess, message]);

    return (
        <div className={styles.landing}>
            <NavbarComponent />
            <SearchComponent />

            {isLoading && <LoadingOverlayComponent />}
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
