import React, {Component} from 'react';
import {Nav, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './Menu.css'
import Logo from "./Logo";

interface IProps {
    summaryVisible: boolean,
    experienceVisible: boolean,
    projectsVisible: boolean,
    educationVisible: boolean,
    skillsVisible: boolean,
    linksVisible: boolean,
    toggleSummaryVisible: () => void,
    toggleExperienceVisible: () => void,
    toggleProjectsVisible: () => void,
    toggleEducationVisible: () => void,
    toggleSkillsVisible: () => void,
    toggleLinksVisible: () => void
}

class Menu extends Component<IProps> {
    render() {
        return (
            <Nav className="sidebar">
                <div className="sidebar-sticky">
                    <Nav.Item>
                        <Logo/>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.summaryVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'summary'}
                                          onChange={this.props.toggleSummaryVisible}>Summary</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.experienceVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'experience'}
                                          onChange={this.props.toggleExperienceVisible}>Experience</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.projectsVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'projects'}
                                          onChange={this.props.toggleProjectsVisible}>Projects</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.educationVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'education'}
                                          onChange={this.props.toggleEducationVisible}>Education</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.skillsVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'skills'}
                                          onChange={this.props.toggleSkillsVisible}>Skills</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className={this.props.linksVisible ? "activeMenuButton" : "menuButton"} variant={'secondary'} value={'links'}
                                          onChange={this.props.toggleLinksVisible}>Links</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                </div>
            </Nav>
        );
    }
}

export default Menu;