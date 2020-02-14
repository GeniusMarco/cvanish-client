import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'
import ProjectLink from "../../model/ProjectLink";

interface IProps {
    id: number,
    projectLinks: Map<number, ProjectLink>,
    setProjectLinks: (links: Map<number, ProjectLink>) => void
}

class ProjectLinkInput extends Component<IProps> {
    render() {
        return (
            <Form.Row>
                <TextInput header={"Resource name"} name={"header"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleHeaderChange(this.props.id, "header", event.target.value)}/>
                <TextInput header={"Link"} name={"link"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handlerUrlChange(this.props.id, "link", event.target.value)}/>
                <Button className={"removeButton"} variant={'danger'} size={'sm'}
                        onClick={() => this.removeProjectLinkInput(this.props.id)}>Remove</Button>
            </Form.Row>
        );
    }

    handleHeaderChange = (id: number, name: string, value: string) => {
        let projectLink: ProjectLink;
        if (!this.props.projectLinks.has(id)) {
            projectLink = new ProjectLink();
        } else {
            // @ts-ignore
            projectLink = this.props.projectLinks.get(id);
        }
        projectLink.header = value;
        const copy: Map<number, ProjectLink> = new Map<number, ProjectLink>(this.props.projectLinks).set(id, projectLink);
        this.props.setProjectLinks(copy);
    };

    handlerUrlChange = (id: number, name: string, value: string) => {
        let projectLink: ProjectLink;
        if (!this.props.projectLinks.has(id)) {
            projectLink = new ProjectLink();
        } else {
            // @ts-ignore
            projectLink = this.props.projectLinks.get(id);
        }
        projectLink.url = value;
        const copy: Map<number, ProjectLink> = new Map<number, ProjectLink>(this.props.projectLinks).set(id, projectLink);
        this.props.setProjectLinks(copy);
    };

    removeProjectLinkInput = (id: number) => {
        let copy = new Map<number, ProjectLink>(this.props.projectLinks);
        copy.delete(id);
        this.props.setProjectLinks(copy);
    };
}

export default ProjectLinkInput;
