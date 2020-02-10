import React, {ChangeEvent, Component, FormEvent} from 'react';
import './DataForm.css'
import TextInput from "./inputs/TextInput";
import FileSaver from "file-saver";
import Experience from "../model/Experience";
import ExperienceInput from "./inputs/ExperienceInput";
import {Button, Form} from "react-bootstrap";
import TextAreaInput from "./inputs/TextAreaInput";

interface IProps {
    experiences: Map<number, Experience>,
    setExperiences: (experiences: Map<number, Experience>) => void,
    summaryVisible: boolean,
    skillsVisible: boolean
}

interface IState {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    summary: string,
    skills: string
}

class DataForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {firstName: '', lastName: '', phone: '', email: '', summary: '', skills: ''}
    }

    render() {
        const experienceInputs = [];
        for (const key of Array.from(this.props.experiences.keys())) {
            experienceInputs.push(<ExperienceInput id={key} key={key} experiences={this.props.experiences}
                                                   setExperiences={this.props.setExperiences}/>)
        }

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <TextInput header={"First name"} name={"firstName"} onChange={this.handleInputChange}/>
                        <TextInput header={"Last name"} name={"lastName"} mostRight={true} onChange={this.handleInputChange}/>
                    </Form.Row>
                    <Form.Row>
                        <TextInput header={"Phone number"} name={"phone"} onChange={this.handleInputChange}/>
                        <TextInput header={"E-mail address"} name={"email"} mostRight={true} onChange={this.handleInputChange}/>
                    </Form.Row>
                    {this.props.summaryVisible ?
                        <TextAreaInput header={"Summary"} onChange={this.handleTextAreaChange}/> :
                        null}
                    {experienceInputs}
                    {this.props.skillsVisible ?
                        <TextAreaInput header={"Skills"} onChange={this.handleTextAreaChange}/> :
                        null}
                    <Button className={'submitButton'} type={'submit'} block={true} variant={'secondary'}>Download CV</Button>
                </Form>
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

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let experiencesArray: Experience[] = [];
        // @ts-ignore
        for (const [, experience] of this.props.experiences.entries()) {
            experiencesArray.push(experience);
        }
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            summary: this.state.summary,
            experiences: experiencesArray,
            skills: this.state.skills
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