import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import DataForm from "./DataForm";

interface IProps {
    experienceCounter: number,
    removeExperienceInput: () => void
}

class DataGrid extends Component<IProps> {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="centerCol">
                        <DataForm experienceCounter={this.props.experienceCounter}
                                  removeExperienceInput={this.props.removeExperienceInput}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DataGrid;