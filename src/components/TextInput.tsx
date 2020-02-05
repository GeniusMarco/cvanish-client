import React, {ChangeEvent, Component} from 'react';
import './DataForm.css'

interface IProps {
    header: string,
    name: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

class TextInput extends Component<IProps> {
    render() {
        return (
            <label className="textField">
                <div>{this.props.header}</div>
                <div><input onChange={this.props.onChange} type="text" name={this.props.name} className="inputTextArea"/></div>
            </label>
        );
    }
}

export default TextInput;