import React, {Component} from 'react';
import DataGrid from "./components/DataGrid";
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import Experience from "./model/Experience";
import Menu from "./components/Menu";
import {Col, Row} from "react-bootstrap";

interface IState {
    experiences: Map<number, Experience>,
    summaryVisible: boolean
}

class App extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {experiences: new Map<number, Experience>(), summaryVisible: false}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={2} md={2} lg={2}>
                        <Menu experiences={this.state.experiences} setExperiences={this.setExperiences}
                              summaryVisible={this.state.summaryVisible} setSummaryVisible={this.setSummaryVisible}/>
                    </Col>
                    <Col>
                        <DataGrid
                            experiences={this.state.experiences}
                            setExperiences={this.setExperiences}
                            summaryVisible={this.state.summaryVisible}
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
}

export default App;