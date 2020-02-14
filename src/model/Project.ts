import ProjectLink from "./ProjectLink";

class Project {
    title: string;
    description: string;
    links: Map<number, ProjectLink>;
    sinceYear: string;
    toYear: string;

    constructor() {
        this.title = "";
        this.description = "";
        this.links = new Map<number, ProjectLink>();
        this.sinceYear = "";
        this.toYear = "";
    }
}

export default Project;