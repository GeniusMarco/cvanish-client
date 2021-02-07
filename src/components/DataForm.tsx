import React, {ChangeEvent, Component, FormEvent} from 'react';
import './DataForm.css'
import TextInput from "./inputs/TextInput";
import FileSaver from "file-saver";
import Experience from "../model/Experience";
import ExperienceInput from "./inputs/ExperienceInput";
import {Button, Card, Form, Spinner} from "react-bootstrap";
import TextAreaInput from "./inputs/TextAreaInput";
import Education from "../model/Education";
import EducationInput from "./inputs/EducationInput";
import LinkInput from "./inputs/LinkInput";
import Project from "../model/Project";
import ProjectInput from "./inputs/ProjectInput";

interface IProps {
    summaryVisible: boolean,
    experienceVisible: boolean,
    toggleExperienceVisible: () => void,
    projectsVisible: boolean,
    toggleProjectsVisible: () => void,
    educationVisible: boolean,
    toggleEducationVisible: () => void,
    skillsVisible: boolean,
    linksVisible: boolean,
    toggleLinksVisible: () => void
}

interface IState {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    summary: string,
    experiences: Map<number, Experience>,
    projects: Map<number, Project>,
    educations: Map<number, Education>,
    skills: string,
    links: Map<number, string>,
    downloading: boolean
}

class DataForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            summary: '',
            experiences: new Map<number, Experience>(),
            projects: new Map<number, Project>(),
            educations: new Map<number, Education>(),
            skills: '',
            links: new Map<number, string>(),
            downloading: false
        }
    }

    render() {
        if (this.props.experienceVisible && this.state.experiences.size === 0) {
            this.addExperienceInput();
        }
        const experienceInputs = [];
        for (const key of Array.from(this.state.experiences.keys())) {
            experienceInputs.push(<ExperienceInput id={key} key={key} experiences={this.state.experiences}
                                                   setExperiences={this.setExperiences}
                                                   toggleExperienceVisible={this.props.toggleExperienceVisible}/>)
        }
        if (this.props.projectsVisible && this.state.projects.size === 0) {
            this.addProjectInput();
        }
        const projectInputs = [];
        for (const key of Array.from(this.state.projects.keys())) {
            projectInputs.push(<ProjectInput id={key} key={key} projects={this.state.projects} setProjects={this.setProjects}
                                             toggleProjectsVisible={this.props.toggleProjectsVisible}/>)
        }
        if (this.props.educationVisible && this.state.educations.size === 0) {
            this.addEducationInput();
        }
        const educationInputs = [];
        for (const key of Array.from(this.state.educations.keys())) {
            educationInputs.push(<EducationInput id={key} key={key} educations={this.state.educations}
                                                 setEducations={this.setEducations}
                                                 toggleEducationVisible={this.props.toggleEducationVisible}/>)
        }
        if (this.props.linksVisible && this.state.links.size === 0) {
            this.addLinkInput();
        }
        const linkInputs = [];
        for (const key of Array.from(this.state.links.keys())) {
            linkInputs.push(<LinkInput id={key} key={key} links={this.state.links} setLinks={this.setLinks}
                                       toggleLinksVisible={this.props.toggleLinksVisible}/>)
        }

        return (
            <div className="dataGrid">
                <Form onSubmit={this.handleSubmit}>
                    <Card border={"secondary"} className={"section"}>
                        <Card.Header><h5>Personal information</h5></Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <TextInput header={"First name"} name={"firstName"} onChange={this.handleInputChange}/>
                                <TextInput header={"Last name"} name={"lastName"} mostRight={true} onChange={this.handleInputChange}/>
                            </Form.Row>
                            <Form.Row>
                                <TextInput header={"Phone number"} name={"phone"} onChange={this.handleInputChange}/>
                                <TextInput header={"E-mail address"} name={"email"} mostRight={true} onChange={this.handleInputChange}/>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                    {this.props.summaryVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header><h5>Summary</h5></Card.Header>
                            <Card.Body className="textAreaCardBody">
                                <TextAreaInput name={"summary"} onChange={this.handleTextAreaChange}/>
                            </Card.Body>
                        </Card> :
                        null}
                    {this.props.experienceVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header>
                                <h5>
                                    Experience <Button className="addButton" variant={"success"} size={"sm"}
                                                       onClick={this.addExperienceInput}>Add experience</Button>
                                </h5>
                            </Card.Header>
                            <Card.Body className="complexInputCardBody">
                                {experienceInputs}
                            </Card.Body>
                        </Card> :
                        null}
                    {this.props.projectsVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header>
                                <h5>
                                    Projects <Button className="addButton" variant={"success"} size={"sm"}
                                                       onClick={this.addProjectInput}>Add project</Button>
                                </h5>
                            </Card.Header>
                            <Card.Body className="complexInputCardBody">
                                {projectInputs}
                            </Card.Body>
                        </Card> :
                        null}
                    {this.props.educationVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header>
                                <h5>
                                    Education <Button className="addButton" variant={"success"} size={"sm"}
                                                      onClick={this.addEducationInput}>Add education</Button>
                                </h5>
                            </Card.Header>
                            <Card.Body className="complexInputCardBody">
                                {educationInputs}
                            </Card.Body>
                        </Card> :
                        null
                    }
                    {this.props.skillsVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header><h5>Skills</h5></Card.Header>
                            <Card.Body className="textAreaCardBody">
                                <TextAreaInput name={"skills"} onChange={this.handleTextAreaChange}/>
                            </Card.Body>
                        </Card> :
                        null}
                    {this.props.linksVisible ?
                        <Card border={"secondary"} className={"section"}>
                            <Card.Header>
                                <h5>
                                    Links <Button className="addButton" variant={"success"} size={"sm"}
                                                  onClick={this.addLinkInput}>Add link</Button>
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                {linkInputs}
                            </Card.Body>
                        </Card> :
                        null
                    }
                    <Button disabled={this.state.downloading} className={'submitButton'} type={'submit'} block={true} size={"lg"}
                            variant={'secondary'}>
                        {this.state.downloading ? <Spinner animation="grow" size="sm"/> : "Download CV"}
                    </Button>
                </Form>
            </div>
        );
    }

    addExperienceInput = () => {
        let key: number = this.state.experiences.size;
        for (let i = 0; i < this.state.experiences.size; i++) {
            if (!this.state.experiences.has(i)) {
                key = i;
                break;
            }
        }
        this.setExperiences(new Map<number, Experience>(this.state.experiences).set(key, new Experience()));
    };

    addProjectInput = () => {
        let key: number = this.state.projects.size;
        for (let i = 0; i < this.state.projects.size; i++) {
            if (!this.state.projects.has(i)) {
                key = i;
                break;
            }
        }
        this.setProjects(new Map<number, Project>(this.state.projects).set(key, new Project()));
    };

    addEducationInput = () => {
        let key: number = this.state.educations.size;
        for (let i = 0; i < this.state.educations.size; i++) {
            if (!this.state.educations.has(i)) {
                key = i;
                break;
            }
        }
        this.setEducations(new Map<number, Education>(this.state.educations).set(key, new Education()));
    };

    addLinkInput = () => {
        let key: number = this.state.links.size;
        for (let i = 0; i < this.state.links.size; i++) {
            if (!this.state.links.has(i)) {
                key = i;
                break;
            }
        }
        this.setLinks(new Map<number, string>(this.state.links).set(key, ""));
    };

    setExperiences = (experiences: Map<number, Experience>) => {
        this.setState({
            experiences: experiences
        })
    };

    setProjects = (projects: Map<number, Project>) => {
        this.setState({
            projects: projects
        })
    };

    setEducations = (educations: Map<number, Education>) => {
        this.setState({
            educations: educations
        })
    };

    setLinks = (links: Map<number, string>) => {
        this.setState({
            links: links
        })
    };

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
        this.setState({
            downloading: true
        });
        event.preventDefault();
        let experiencesArray: Experience[] = [];
        // @ts-ignore
        for (const [, experience] of this.state.experiences.entries()) {
            experiencesArray.push(experience);
        }
        // @ts-ignore
        for (const [, project] of this.state.projects.entries()) {
            let obj: Object = Object.fromEntries(project.links);
            project.linksArray = obj;
        }
        let projectsArray: Project[] = [];
        // @ts-ignore
        for (const [, project] of this.state.projects.entries()) {
            projectsArray.push(project);
        }
        let educationsArray: Education[] = [];
        // @ts-ignore
        for (const [, education] of this.state.educations.entries()) {
            educationsArray.push(education);
        }
        let linksArray: string[] = [];
        // @ts-ignore
        for (const [, link] of this.state.links.entries()) {
            linksArray.push(link);
        }

        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            summary: this.state.summary,
            experiences: experiencesArray,
            projects: projectsArray,
            educations: educationsArray,
            skills: this.state.skills,
            links: linksArray
        };
        console.log('Submitting form, data:\n' + JSON.stringify(data));
        fetch("/generate", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
            .then(res => {
                console.log("Response from server: " + res.status);
                this.setState({
                    downloading: false
                });
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
