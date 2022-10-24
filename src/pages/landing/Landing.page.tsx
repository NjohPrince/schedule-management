import React from 'react';

// components
import NavbarComponent from '../../components/navbar/Navbar.component';
import SearchComponent from '../../components/search/Search.component';

const LandingPage: React.FC = () => {
    return (
        <div>
            <NavbarComponent />
            <SearchComponent />
        </div>
    );
};

export default LandingPage;
