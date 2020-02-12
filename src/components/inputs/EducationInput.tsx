import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'
import Education from "../../model/Education";

interface IProps {
    id: number,
    educations: Map<number, Education>,
    setEducations: (educations: Map<number, Education>) => void,
}

class EducationInput extends Component<IProps> {
    render() {
        return (
            <Form.Row>
                <TextInput header={"Field of study"} name={"fieldOfStudy"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "fieldOfStudy", event.target.value)}/>
                <TextInput header={"Level"} name={"level"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "level", event.target.value)}/>
                <TextInput header={"University"} name={"university"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "university", event.target.value)}/>
                <TextInput header={"City"} name={"city"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "city", event.target.value)}/>
                <TextInput header={"Country"} name={"country"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "country", event.target.value)}/>
                <TextInput header={"Since"} name={"sinceDate"} placeholder={'MM-RR'}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "sinceDate", event.target.value)}/>
                <TextInput header={"To (optional)"} name={"toDate"} placeholder={'MM-RR'}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleEducationChange(this.props.id, "toDate", event.target.value)}/>
                <Button className={"removeButton"} variant={'danger'} size={'sm'}
                        onClick={() => this.removeEducationInput(this.props.id)}>Remove</Button>
            </Form.Row>
        );
    }

    handleEducationChange = (id: number, name: string, value: string) => {
        let education: Education;
        if (!this.props.educations.has(id)) {
            education = new Education();
        } else {
            // @ts-ignore
            education = this.props.educations.get(id);
        }
        // @ts-ignore
        education[name] = value;
        let copy: Map<number, Education> = new Map<number, Education>(this.props.educations).set(id, education);
        this.props.setEducations(copy);
    };

    removeEducationInput = (id: number) => {
        let copy = new Map<number, Education>(this.props.educations);
        copy.delete(id);
        this.props.setEducations(copy);
    };
}

export default EducationInput;
