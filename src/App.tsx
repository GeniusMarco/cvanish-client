import React, {Component} from 'react';
import DataGrid from "./components/DataGrid";
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Experience from "./model/Experience";
import Menu from "./components/Menu";
import {Col, Row} from "react-bootstrap";
import Education from "./model/Education";

interface IState {
    experiences: Map<number, Experience>,
    educations: Map<number, Education>,
    summaryVisible: boolean,
    skillsVisible: boolean,
    links: Map<number, string>
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {experiences: new Map<number, Experience>(), educations: new Map<number, Education>(),
            summaryVisible: false, skillsVisible: false, links: new Map<number, string>()}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={0} md={0} lg={0}>
                        <Menu experiences={this.state.experiences} setExperiences={this.setExperiences}
                              educations={this.state.educations} setEducations={this.setEducations}
                              summaryVisible={this.state.summaryVisible} setSummaryVisible={this.setSummaryVisible}
                              skillsVisible={this.state.skillsVisible} setSkillsVisible={this.setSkillsVisible}
                              links={this.state.links} setLinks={this.setLinks}/>
                    </Col>
                    <Col>
                        <DataGrid
                            experiences={this.state.experiences}
                            setExperiences={this.setExperiences}
                            educations={this.state.educations}
                            setEducations={this.setEducations}
                            summaryVisible={this.state.summaryVisible}
                            skillsVisible={this.state.skillsVisible}
                            links={this.state.links}
                            setLinks={this.setLinks}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    setExperiences = (experiences: Map<number, Experience>) => {
        this.setState({
            experiences: experiences
        })
    };

    setEducations = (educations: Map<number, Education>) => {
        this.setState({
            educations: educations
        })
    };

    setSummaryVisible = (summaryVisible: boolean) => {
        this.setState({
            summaryVisible: summaryVisible
        })
    };

    setSkillsVisible = (skillsVisible: boolean) => {
        this.setState({
            skillsVisible: skillsVisible
        })
    };

    setLinks = (links: Map<number, string>) => {
        this.setState({
            links: links
        })
    }
}

export default App;