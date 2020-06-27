import React, { Component } from 'react';
import MyNavbar from './NavBar';
import MyLogo from './Logo';
import MyConnectionRegisterBar from './ConnectionRegisterBar';

const Header = () => (
    <div>
        <MyConnectionRegisterBar />
        <MyLogo />
        <MyNavbar />
    </div>
)

export default Header;