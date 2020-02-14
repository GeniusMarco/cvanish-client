import React, {ChangeEvent} from 'react';
import {Form} from "react-bootstrap";
import '../DataForm.css'

interface IProps {
    header?: string,
    name: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaInput = (props: IProps) => (
    <Form.Group className={"textAreaGroup"}>
        <Form.Row>
            {props.header === undefined ? null : <Form.Label>{props.header}</Form.Label>}
            <Form.Control className={"textArea"} name={props.name} as={'textarea'} rows={8} onChange={props.onChange}/>
        </Form.Row>
    </Form.Group>
);

export default TextAreaInput;