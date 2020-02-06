import React, {ChangeEvent, Component, FormEvent} from 'react';
import './DataForm.css'
import TextInput from "./TextInput";
import FileSaver from "file-saver";
import ExperienceInput from "./ExperienceInput";
import Experience from "../model/Experience";

interface IState {
    firstName: string,
    lastName: string,
    experience: Experience[],
    experienceCounter: number
}

class DataForm extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {firstName: '', lastName: '', experience: [], experienceCounter: 0}
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleExperienceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(event.target.name.substr(event.target.name.length - 1));
        if (this.state.experience == null || this.state.experience.length < id + 1) {
            let experience: Experience = {
                city: "",
                company: "",
                country: "",
                role: "",
                sinceDate: new Date(Date.now()),
                toDate: new Date(Date.now())
            };
            this.state.experience.push(experience);
            // @ts-ignore
        }
        let copy: Experience[] = this.state.experience.slice();
        // @ts-ignore
        copy[id][event.target.name.substring(0, event.target.name.indexOf('-'))] = event.target.value;
        this.setState({
            experience: copy
        });
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const data = {firstName: this.state.firstName, lastName: this.state.lastName, experience: this.state.experience};
        console.log('Submitting form, data:\n' + JSON.stringify(data));
        fetch("/api/data", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
            .then(res => {
                console.log("Response from server: " + res.status);
                return res;
            })
            .then(this.handleErrors)
            .then(res => res.blob())
            .then(blob => FileSaver.saveAs(blob, data.firstName + "_" + data.lastName + "_CV.pdf"))
            .catch(error => {
                console.log(error);
                alert("Could not process your request.\n" + error)
            });
    };

    handleErrors = (response: Response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    };

    addExperienceInput = () => {
        this.setState({
            experienceCounter: this.state.experienceCounter + 1
        });
    };

    render() {
        const experienceInputs = [];
        for (let index = 0; index < this.state.experienceCounter; index++) {
            experienceInputs.push(<ExperienceInput id={index} onChange={this.handleExperienceChange} />)
        }

        return (
            <div>
                <div>
                    <button onClick={this.addExperienceInput}>Addd</button>
                </div>

                <form onSubmit={event => this.handleSubmit(event)}>
                    <TextInput header={"First name:"} name={"firstName"} onChange={this.handleChange}/>
                    <TextInput header={"Last name:"} name={"lastName"} onChange={this.handleChange}/>
                    {experienceInputs}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default DataForm;