import './Header.css'
import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <HeaderNavbar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;