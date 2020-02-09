import React, {ChangeEvent, Component, FormEvent} from 'react';
import './DataForm.css'
import TextInput from "./TextInput";
import FileSaver from "file-saver";
import Experience from "../model/Experience";
import ExperienceInput from "./ExperienceInput";

interface IProps {
    experienceCounter: number,
    removeExperienceInput: () => void,
    summaryVisible: boolean
}

interface IState {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    summary: string,
    experiences: Map<number, Experience>
}

class DataForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {firstName: '', lastName: '', phone: '', email: '', summary: '',
            experiences: new Map<number, Experience>()}
    }

    render() {
        const experienceInputs = [];
        for (let index = 0; index < this.props.experienceCounter; index++) {
            experienceInputs.push(<ExperienceInput id={index} key={index} onChange={this.handleExperienceChange}
                                                   onRemoveClick={this.handleExperienceRemove}/>)
        }

        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <TextInput header={"First name"} name={"firstName"} onChange={this.handleInputChange}/>
                        <TextInput header={"Last name"} name={"lastName"} onChange={this.handleInputChange}/>
                    </div>
                    <div>
                        <TextInput header={"Phone number"} name={"phone"} onChange={this.handleInputChange}/>
                        <TextInput header={"E-mail address"} name={"email"} onChange={this.handleInputChange}/>
                    </div>
                    {this.props.summaryVisible ?
                        (<div>
                            <label htmlFor="summaryTextArea">Summary</label>
                            <textarea name={"summary"} className={"form-control textArea"} id={"summaryTextArea"} rows={6}
                            onChange={this.handleTextAreaChange}/>
                        </div>) :
                        null}
                    {experienceInputs}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // @ts-ignore
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleExperienceChange = (id: number, name: string, value: string) => {
        let newExperience: Experience;
        if (!this.state.experiences.has(id)) {
            newExperience = {
                city: "",
                company: "",
                country: "",
                role: "",
                sinceDate: new Date(),
                toDate: new Date()
            };
        } else {
            // @ts-ignore
            newExperience = this.state.experiences.get(id);
        }
        // @ts-ignore
        newExperience[name] = value;
        let copy: Map<number, Experience> = new Map<number, Experience>(this.state.experiences).set(id, newExperience);
        this.setState({
            experiences: copy
        });
    };

    handleExperienceRemove = () => {
        this.props.removeExperienceInput();
    };

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let experiencesArray: Experience[] = [];
        // @ts-ignore
        for (const [, experience] of this.state.experiences.entries()) {
            experiencesArray.push(experience);
        }
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            summary: this.state.summary,
            experiences: experiencesArray
        };
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
            .then(blob => FileSaver.saveAs(blob, this.state.firstName + "_" + this.state.lastName + "_CV.pdf"))
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
}

export default DataForm;