import React, {ChangeEvent, Component} from 'react';
import '../DataForm.css'
import {Form} from 'react-bootstrap';

interface IProps {
    header: string,
    name: string,
    type?: string,
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

class TextInput extends Component<IProps> {
    render() {
        return (
            <span>
                <Form.Label>{this.props.header}</Form.Label>
                <Form.Control name={this.props.name} type={this.props.type} onChange={this.props.onChange}
                              className={this.props.placeholder == undefined? "textField" : "dateTextField"} placeholder={this.props.placeholder}/>
            </span>
        );
    }
}

export default TextInput;