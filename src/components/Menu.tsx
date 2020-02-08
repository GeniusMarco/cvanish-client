import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import '../App.css'

interface IProps {
    addExperienceInput: () => void,
}

class Menu extends Component<IProps> {
    render() {
        return (
            <Navbar fixed="bottom" bg="primary" variant="dark">
                <button onClick={this.props.addExperienceInput}>Add experience</button>
            </Navbar>
        );
    }
}

export default Menu;