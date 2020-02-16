import ProjectLink from "./ProjectLink";

class Project {
    title: string;
    description: string;
    links: ProjectLink[];
    sinceYear: string;
    toYear: string;

    constructor() {
        this.title = "";
        this.description = "";
        this.links = [];
        this.sinceYear = "";
        this.toYear = "";
    }
}

export default Project;