import React, {ChangeEvent} from 'react';
import {Form} from "react-bootstrap";
import '../DataForm.css'

interface IProps {
    name: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaInput = (props: IProps) => (
    <Form.Group className={"textAreaGroup"}>
        <Form.Row>
            <Form.Control className={"textArea"} name={props.name} as={'textarea'} rows={8} onChange={props.onChange}/>
        </Form.Row>
    </Form.Group>
);

export default TextAreaInput;