import React, {ChangeEvent, Component} from 'react';
import '../DataForm.css'
import {Col, Form} from 'react-bootstrap';

interface IProps {
    header: string,
    name: string,
    type?: string,
    placeholder?: string,
    mostRight?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

class TextInput extends Component<IProps> {
    render() {
        return (
            <Form.Group as={Col} className={this.props.mostRight === true ? "mostRight" : ""}>
                <Form.Label>{this.props.header}</Form.Label>
                <Form.Control name={this.props.name} type={this.props.type} onChange={this.props.onChange}
                              placeholder={this.props.placeholder}/>
            </Form.Group>
        );
    }
}

export default TextInput;