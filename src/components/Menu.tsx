import React, {Component} from 'react';
import {Button, ButtonToolbar, Navbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import '../App.css'

interface IProps {
    addExperienceInput: () => void,
    toggleSummary: () => void
}

class Menu extends Component<IProps> {
    render() {
        return (
            <Navbar fixed="bottom" bg="primary" variant="dark">
                <ButtonToolbar>
                    <Button variant={'secondary'} onClick={this.props.addExperienceInput}>Add experience</Button>
                    <ToggleButtonGroup type="checkbox">
                        <ToggleButton className={'toggleButton'} variant={'secondary'} value={'summary'}
                                      onChange={this.props.toggleSummary}>Summary</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </Navbar>
        );
    }
}

export default Menu;