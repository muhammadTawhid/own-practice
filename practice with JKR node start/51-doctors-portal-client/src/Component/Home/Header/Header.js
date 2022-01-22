import "./Header.css";
import React from 'react';
import HeadersMain from '../HeadersMain/HeadersMain';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from "../BusinessInfo/BusinessInfo";

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeadersMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;