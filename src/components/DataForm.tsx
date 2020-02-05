import React, {ChangeEvent, Component, FormEvent} from 'react';
import './DataForm.css'
import TextInput from "./TextInput";

interface IState {
    firstName: string,
    lastName: string
}

class DataForm extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {firstName: '', lastName: ''}
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const data = {firstName: this.state.firstName, lastName: this.state.lastName};
        console.log('Submitting form...');
        fetch("/api/data", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
            .then(res => res.status)
            .then(response => console.log("Response from server: " + response));
    };

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <TextInput header={"First name:"} name={"firstName"} onChange={this.handleChange} />
                <TextInput header={"Last name:"} name={"lastName"} onChange={this.handleChange} />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default DataForm;