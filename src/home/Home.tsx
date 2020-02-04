import React from "react";
import {Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Navbar>
            <NavbarBrand>Dupa2</NavbarBrand>
            <NavItem>DupaItem1</NavItem>
            <NavItem>DupaItem2</NavItem>
        </Navbar>
    );
};

export default Home;