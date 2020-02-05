import React from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './Header.css'

const Header = () => (
    <Navbar id="navbar" className="justify-content-center" sticky="top" bg="primary" variant="dark">
        <NavbarBrand href="/">CVanish</NavbarBrand>
    </Navbar>
);

export default Header;