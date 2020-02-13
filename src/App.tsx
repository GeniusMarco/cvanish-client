import React, {Component} from 'react';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Menu from "./components/Menu";
import {Col, Row} from "react-bootstrap";
import DataForm from "./components/DataForm";

interface IState {
    summaryVisible: boolean,
    experienceVisible: boolean,
    educationVisible: boolean,
    skillsVisible: boolean,
    linksVisible: boolean
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {summaryVisible: false, experienceVisible: false, educationVisible: false, skillsVisible: false,
            linksVisible: false}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={0} md={0} lg={0}>
                    </Col>
                    <Menu summaryVisible={this.state.summaryVisible}
                          experienceVisible={this.state.experienceVisible}
                          educationVisible={this.state.educationVisible}
                          skillsVisible={this.state.skillsVisible}
                          linksVisible={this.state.linksVisible}
                          toggleSummaryVisible={this.toggleSummaryVisible}
                          toggleExperienceVisible={this.toggleExperienceVisible}
                          toggleEducationVisible={this.toggleEducationVisible}
                          toggleSkillsVisible={this.toggleSkillsVisible}
                          toggleLinksVisible={this.toggleLinksVisible}
                    />
                    <Col>
                        <DataForm
                            summaryVisible={this.state.summaryVisible}
                            experienceVisible={this.state.experienceVisible}
                            toggleExperienceVisible={this.toggleExperienceVisible}
                            educationVisible={this.state.educationVisible}
                            toggleEducationVisible={this.toggleEducationVisible}
                            skillsVisible={this.state.skillsVisible}
                            linksVisible={this.state.linksVisible}
                            toggleLinksVisible={this.toggleLinksVisible}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    toggleSummaryVisible = () => {
        this.setState({
            summaryVisible: !this.state.summaryVisible
        })
    };

    toggleExperienceVisible = () => {
        this.setState({
            experienceVisible: !this.state.experienceVisible
        })
    };

    toggleEducationVisible = () => {
        this.setState({
            educationVisible: !this.state.educationVisible
        })
    };

    toggleSkillsVisible = () => {
        this.setState({
            skillsVisible: !this.state.skillsVisible
        })
    };

    toggleLinksVisible = () => {
        this.setState({
            linksVisible: !this.state.linksVisible
        })
    };

    /*setExperiences = (experiences: Map<number, Experience>) => {
        this.setState({
            experiences: experiences
        })
    };

    setEducations = (educations: Map<number, Education>) => {
        this.setState({
            educations: educations
        })
    };

    setLinks = (links: Map<number, string>) => {
        this.setState({
            links: links
        })
    }*/
}

export default App;