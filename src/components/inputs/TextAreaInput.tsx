import React, {ChangeEvent} from 'react';
import {Form} from "react-bootstrap";
import '../DataForm.css'

interface IProps {
    header: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaInput = (props: IProps) => (
    <Form.Group className={"textAreaGroup"}>
        <Form.Row>
            <Form.Label>{props.header}</Form.Label>
            <Form.Control name={props.header.toLowerCase()} as={'textarea'} rows={6} onChange={props.onChange}/>
        </Form.Row>
    </Form.Group>
);

export default TextAreaInput;