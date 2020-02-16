import React, {ChangeEvent, Component} from 'react';
import TextInput from "./TextInput";
import {Button, Form} from "react-bootstrap";
import '../DataForm.css'
import Project from "../../model/Project";
import TextAreaInput from "./TextAreaInput";
import ProjectLinkInput from "./ProjectLinkInput";
import ProjectLink from "../../model/ProjectLink";

interface IProps {
    id: number,
    projects: Map<number, Project>,
    setProjects: (projects: Map<number, Project>) => void,
    toggleProjectsVisible: () => void
}

interface IState {
    projectLinks: ProjectLink[]
}

class ProjectInput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            projectLinks: []
        }
    }

    render() {
        const projectLinkInputs = [];
        // @ts-ignore
        for (const key of this.state.projectLinks.map(l => l.id)) {
            console.log("KEY " + key);
            projectLinkInputs.push(<ProjectLinkInput id={key} key={key} projectLinks={this.state.projectLinks}
                                                     setProjectLinks={this.setProjectLinks}/>);
        }

        return (
            <div className="complexInputContainer">
                <Form.Row>
                    <TextInput header={"Title"} name={"title"}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleProjectChange(this.props.id, "title", event.target.value)}/>
                    <TextInput header={"Since"} name={"sinceDate"} placeholder={'RRRR'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleProjectChange(this.props.id, "sinceYear", event.target.value)}/>
                    <TextInput header={"To (optional)"} name={"toDate"} placeholder={'RRRR'}
                               onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleProjectChange(this.props.id, "toYear", event.target.value)}/>
                </Form.Row>
                <Form.Row>
                    <div className="projectDescription">
                        <TextAreaInput header={"Description"} name={"description"} onChange={this.handleDescriptionChange}/>
                    </div>
                </Form.Row>
                    <Form.Group>
                        <Form.Row>
                            <Button className="addButton" variant={"success"} size={"sm"}
                                    onClick={this.addProjectLinkInput}>Add link</Button>
                        </Form.Row>
                    </Form.Group>
                {projectLinkInputs}
                <Form.Row>
                    <Button className={"removeProjectButton"} variant={'danger'} size={'sm'}
                            onClick={() => this.removeProjectInput(this.props.id)}>Remove project</Button>
                </Form.Row>
            </div>
        );
    }

    handleProjectChange = (id: number, name: string, value: string) => {
        let project: Project;
        if (!this.props.projects.has(id)) {
            project = new Project();
        } else {
            // @ts-ignore
            project = this.props.projects.get(id);
        }
        // @ts-ignore
        project[name] = value;
        let copy: Map<number, Project> = new Map<number, Project>(this.props.projects).set(id, project);
        this.props.setProjects(copy);
    };

    handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // @ts-ignore
        let project: Project = this.props.projects.get(this.props.id);
        project.description = event.target.value;
        let projects: Map<number, Project> = this.props.projects;
        this.props.setProjects(projects.set(this.props.id, project));
    };

    addProjectLinkInput = () => {
        let key: number = this.state.projectLinks.length;
        for (let i = 0; i < this.state.projectLinks.length; i++) {
            // if (!this.state.projectLinks.has(i)) {
            if (!this.state.projectLinks.map(x => x.id).includes(i)) {
                key = i;
                break;
            }
        }
        let copy: ProjectLink[] = this.state.projectLinks.slice();
        copy.push(new ProjectLink(key));
        this.setProjectLinks(copy);
    };

    setProjectLinks = (projectLinks: ProjectLink[]) => {
        console.log("setProjectLinks argument: " + projectLinks.toString());
        console.log("setProjectLinks state: " + this.state.projectLinks.toString());
        this.setState({
            projectLinks: projectLinks
        });
        // @ts-ignore
        let project: Project = this.props.projects.get(this.props.id);
        project.links = projectLinks;
        this.props.setProjects(this.props.projects.set(this.props.id, project));
    };

    removeProjectInput = (id: number) => {
        let copy = new Map<number, Project>(this.props.projects);
        copy.delete(id);
        if (copy.size === 0) {
            this.props.toggleProjectsVisible();
        }
        this.props.setProjects(copy);
    };
}

export default ProjectInput;
