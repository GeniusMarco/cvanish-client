import React from 'react';
import './DataGrid.css';
import {Col, Container, Row} from "react-bootstrap";
import DataForm from "./DataForm";

const DataGrid = () => (
    <Container>
        <Row>
            <Col className="centerCol">
                <DataForm />
            </Col>
        </Row>
    </Container>
);

export default DataGrid;