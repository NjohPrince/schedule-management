import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// utils
import { CONSTANTS } from './constants/Constants';

// application pages
import NotFoundPage from './pages/error-pages/Notfound.page';
import LandingPage from './pages/landing/Landing.page';
import NewAppointment from './pages/add-new-appointment/New.page';
import AppTestComponent from './components/antdTable/AntDTable';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path={CONSTANTS.PATHS.landing} element={<LandingPage />} />
                    <Route path={CONSTANTS.PATHS.add_new_appointment} element={<NewAppointment />} />
                    <Route path={CONSTANTS.PATHS.unknown_path} element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
