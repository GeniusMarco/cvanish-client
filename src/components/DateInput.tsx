import React, {ChangeEvent, Component} from 'react';
import './DataForm.css'

interface IProps {
    header: string,
    name: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

class DateInput extends Component<IProps> {
    render() {
        return (
            <label className="dateTextField">
                <div>{this.props.header}</div>
                <div><input onChange={this.props.onChange} type="text" name={this.props.name}
                            className='inputTextArea' placeholder="MM-RR"/></div>
            </label>
        );
    }
}

export default DateInput;