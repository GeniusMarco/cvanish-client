import React from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";
import '../App.css'

const Logo = () => (
    <Navbar className="justify-content-center" sticky="top" bg="primary" variant="dark">
        <NavbarBrand id="navbarBrand" href="/">CVanish</NavbarBrand>
    </Navbar>
);

export default Logo;