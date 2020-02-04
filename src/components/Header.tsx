import React from 'react';
import {Navbar, NavbarBrand, NavItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => (
    <Navbar>
        <NavbarBrand className={"`${brand} ${justify.content.center}`"}>CVanish</NavbarBrand>
        <NavItem>DupaItem1</NavItem>
        <NavItem>DupaItem2</NavItem>
    </Navbar>
);

export default Header;