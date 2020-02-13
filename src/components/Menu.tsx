import React, {Component} from 'react';
import {Button, ButtonGroup, Nav, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './Menu.css'
import Experience from "../model/Experience";
import Logo from "./Logo";
import Education from "../model/Education";

interface IProps {
    experiences: Map<number, Experience>,
    educations: Map<number, Education>,
    summaryVisible: boolean,
    skillsVisible: boolean,
    links: Map<number, string>,
    setExperiences: (experiences: Map<number, Experience>) => void,
    setEducations: (educations: Map<number, Education>) => void,
    setSummaryVisible: (summaryVisible: boolean) => void,
    setSkillsVisible: (skillsVisible: boolean) => void,
    setLinks: (links: Map<number, string>) => void
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
                            <ToggleButton className="toggleButton menuButton" variant={'secondary'} value={'summary'}
                                          onChange={this.toggleSummary}>Summary</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ButtonGroup className="menuButtonGroup">
                            <Button className="menuButton" variant={'secondary'} onClick={this.addExperienceInput}>Add experience</Button>
                        </ButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ButtonGroup className="menuButtonGroup">
                            <Button className="menuButton" variant={'secondary'} onClick={this.addEducationInput}>Add education</Button>
                        </ButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ToggleButtonGroup className="menuButtonGroup" type="checkbox">
                            <ToggleButton className="toggleButton menuButton" variant={'secondary'} value={'skills'}
                                          onChange={this.toggleSkills}>Skills</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item className="menuButtonContainer">
                        <ButtonGroup className="menuButtonGroup">
                            <Button className="menuButton" variant={'secondary'} onClick={this.addLinkInput}>Add link</Button>
                        </ButtonGroup>
                    </Nav.Item>
                </div>
            </Nav>
        );
    }

    toggleSummary = () => {
        this.props.setSummaryVisible(!this.props.summaryVisible);
    };

    addExperienceInput = () => {
        let key: number = this.props.experiences.size;
        for (let i = 0; i < this.props.experiences.size; i++) {
            if (!this.props.experiences.has(i)) {
                key = i;
                break;
            }
        }
        this.props.setExperiences(new Map<number, Experience>(this.props.experiences).set(key, new Experience()));
    };

    addEducationInput = () => {
        let key: number = this.props.educations.size;
        for (let i = 0; i < this.props.educations.size; i++) {
            if (!this.props.educations.has(i)) {
                key = i;
                break;
            }
        }
        this.props.setEducations(new Map<number, Education>(this.props.educations).set(key, new Education()));
    };

    toggleSkills = () => {
        this.props.setSkillsVisible(!this.props.skillsVisible);
    };

    addLinkInput = () => {
        let key: number = this.props.links.size;
        for (let i = 0; i < this.props.links.size; i++) {
            if (!this.props.links.has(i)) {
                key = i;
                break;
            }
        }
        this.props.setLinks(new Map<number, string>(this.props.links).set(key, ""));
    }
}

export default Menu;