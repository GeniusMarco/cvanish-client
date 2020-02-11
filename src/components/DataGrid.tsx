import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import DataForm from "./DataForm";
import Experience from "../model/Experience";
import Education from "../model/Education";

interface IProps {
    experiences: Map<number, Experience>,
    setExperiences: (experiences: Map<number, Experience>) => void,
    educations: Map<number, Education>,
    setEducations: (educations: Map<number, Education>) => void,
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
                                  educations={this.props.educations}
                                  setEducations={this.props.setEducations}
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