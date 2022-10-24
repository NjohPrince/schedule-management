import React from 'react';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';
import SearchComponent from '../../components/search/Search.component';
import StatisticsComponent from '../../components/statistics/Statistics.component';

const LandingPage: React.FC = () => {
    return (
        <div>
            <NavbarComponent />
            <SearchComponent />
            <StatisticsComponent />
        </div>
    );
};

export default LandingPage;
