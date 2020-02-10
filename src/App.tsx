import React, {Component} from 'react';
import DataGrid from "./components/DataGrid";
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Experience from "./model/Experience";
import Menu from "./components/Menu";
import {Col, Row} from "react-bootstrap";

interface IState {
    experiences: Map<number, Experience>,
    summaryVisible: boolean,
    skillsVisible: boolean
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {experiences: new Map<number, Experience>(), summaryVisible: false, skillsVisible: false}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={0} md={0} lg={0}>
                        <Menu experiences={this.state.experiences} setExperiences={this.setExperiences}
                              summaryVisible={this.state.summaryVisible} setSummaryVisible={this.setSummaryVisible}
                              skillsVisible={this.state.skillsVisible} setSkillsVisible={this.setSkillsVisible}/>
                    </Col>
                    <Col>
                        <DataGrid
                            experiences={this.state.experiences}
                            setExperiences={this.setExperiences}
                            summaryVisible={this.state.summaryVisible}
                            skillsVisible={this.state.skillsVisible}
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

    setSummaryVisible = (summaryVisible: boolean) => {
        this.setState({
            summaryVisible: summaryVisible
        })
    }

    setSkillsVisible = (skillsVisible: boolean) => {
        this.setState({
            skillsVisible: skillsVisible
        })
    }
}

export default App;