import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'
import ProjectLink from "../../model/ProjectLink";

interface IProps {
    id: number,
    projectLinks: ProjectLink[],
    setProjectLinks: (links: ProjectLink[]) => void
}

class ProjectLinkInput extends Component<IProps> {
    render() {
        return (
            <Form.Row>
                <TextInput header={"Resource name"} name={"header"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleHeaderChange(this.props.id, event.target.value)}/>
                <TextInput header={"Link"} name={"link"}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleUrlChange(this.props.id, event.target.value)}/>
                <Button className={"removeButton"} variant={'danger'} size={'sm'}
                        onClick={() => this.removeProjectLinkInput(this.props.id)}>Remove</Button>
            </Form.Row>
        );
    }

    handleHeaderChange = (id: number, header: string) => {
        let projectLink: ProjectLink;
        const copy: ProjectLink[] = this.props.projectLinks.slice();

        if (copy.find(l => l.id === id) === undefined) {
            projectLink = new ProjectLink(id);
            copy.push(projectLink);
        } else {
            // @ts-ignore
            projectLink = copy.find(l => l.id === id);
        }
        projectLink.name = header;
        this.props.setProjectLinks(copy);
    };

    handleUrlChange = (id: number, url: string) => {
        let projectLink: ProjectLink;
        const copy: ProjectLink[] = this.props.projectLinks.slice();
        if (copy.find(l => l.id === id) === undefined) {
            projectLink = new ProjectLink(id);
            copy.push(projectLink);
        } else {
            // @ts-ignore
            projectLink = copy.find(l => l.id === id);
        }
        projectLink.url = url;
        this.props.setProjectLinks(copy);
    };

    removeProjectLinkInput = (id: number) => {
        let copy = this.props.projectLinks.slice();
        let s: string = "";
        for (let pl of copy) {
            s+=pl.id + " " + pl.name + "\n";
        }
        console.log(s);
        // @ts-ignore
        copy.splice(copy.indexOf(copy.find(l => l.id === id)), 1);
        s="";
        for (let pl of copy) {
            s+=pl.id + " " + pl.name + "\n";
        }
        console.log(s);
        this.props.setProjectLinks(copy);
    };
}

export default ProjectLinkInput;
