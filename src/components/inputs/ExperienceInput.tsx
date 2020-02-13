import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'
import Experience from "../../model/Experience";

interface IProps {
    id: number,
    experiences: Map<number, Experience>,
    setExperiences: (experiences: Map<number, Experience>) => void,
    toggleExperienceVisible: () => void
}

class ExperienceInput extends Component<IProps> {
    render() {
        return (
            <div className="complexInputContainer">
                <Form.Row>
                    <TextInput header={"Role"} name={"role"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "role", event.target.value)}/>
                    <TextInput header={"Company"} name={"company"} mostRight={true}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "company", event.target.value)}/>
                    </Form.Row>
                <Form.Row>
                    <TextInput header={"City"} name={"city"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "city", event.target.value)}/>
                    <TextInput header={"Country"} name={"country"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "country", event.target.value)}/>
                    <TextInput header={"Since"} name={"sinceDate"} placeholder={'MM-RR'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "sinceDate", event.target.value)}/>
                    <TextInput header={"To (optional)"} name={"toDate"} placeholder={'MM-RR'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleExperienceChange(this.props.id, "toDate", event.target.value)}/>
                    <Button className={"removeButton"} variant={'danger'} size={'sm'}
                            onClick={() => this.removeExperienceInput(this.props.id)}>Remove</Button>
                </Form.Row>
            </div>
        );
    }

    handleExperienceChange = (id: number, name: string, value: string) => {
        let experience: Experience;
        if (!this.props.experiences.has(id)) {
            experience = new Experience();
        } else {
            // @ts-ignore
            experience = this.props.experiences.get(id);
        }
        // @ts-ignore
        experience[name] = value;
        let copy: Map<number, Experience> = new Map<number, Experience>(this.props.experiences).set(id, experience);
        this.props.setExperiences(copy);
    };

    removeExperienceInput = (id: number) => {
        let copy = new Map<number, Experience>(this.props.experiences);
        copy.delete(id);
        if (copy.size === 0) {
            this.props.toggleExperienceVisible();
        }
        this.props.setExperiences(copy);
    };
}

export default ExperienceInput;
