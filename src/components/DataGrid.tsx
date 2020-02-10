import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import DataForm from "./DataForm";
import Experience from "../model/Experience";

interface IProps {
    experiences: Map<number, Experience>,
    setExperiences: (experiences: Map<number, Experience>) => void,
    summaryVisible: boolean,
    skillsVisible: boolean,
}

class DataGrid extends Component<IProps> {
    render() {
        return (
            <div className="dataGrid">
                <Row>
                    <Col>
                        <DataForm experiences={this.props.experiences}
                                  setExperiences={this.props.setExperiences}
                                  summaryVisible={this.props.summaryVisible}
                                  skillsVisible={this.props.skillsVisible}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DataGrid;