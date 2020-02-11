import React, {Component} from 'react';
import {Button, Nav, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import './Menu.css'
import Experience from "../model/Experience";
import Logo from "./Logo";
import Education from "../model/Education";

interface IProps {
    experiences: Map<number, Experience>,
    educations: Map<number, Education>,
    summaryVisible: boolean,
    skillsVisible: boolean,
    setExperiences: (experiences: Map<number, Experience>) => void,
    setEducations: (educations: Map<number, Education>) => void,
    setSummaryVisible: (summaryVisible: boolean) => void,
    setSkillsVisible: (skillsVisible: boolean) => void
}

class Menu extends Component<IProps> {
    render() {
        return (
            <Nav className="sidebar">
                <div className="sidebar-sticky">
                    <Nav.Item>
                        <Logo/>
                    </Nav.Item>
                    <Nav.Item>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton className="toggleButton menuButton" variant={'secondary'} value={'summary'}
                                          onChange={this.toggleSummary}>Summary</ToggleButton>
                        </ToggleButtonGroup>
                    </Nav.Item>
                    <Nav.Item>
                        <Button className="menuButton" variant={'secondary'} onClick={this.addExperienceInput}>Add experience</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button className="menuButton" variant={'secondary'} onClick={this.addEducationInput}>Add education</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton className="toggleButton menuButton" variant={'secondary'} value={'skills'}
                                          onChange={this.toggleSkills}>Skills</ToggleButton>
                        </ToggleButtonGroup>
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
}

export default Menu;