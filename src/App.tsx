import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// application pages
import NotFoundPage from './pages/error-pages/Notfound.page';
import LandingPage from './pages/landing/Landing.page';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
