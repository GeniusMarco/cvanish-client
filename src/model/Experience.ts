class Experience {
    role: string;
    company: string;
    city: string;
    country: string;
    sinceDate: Date;
    toDate: Date;


    constructor() {
        this.role = "";
        this.company = "";
        this.city = "";
        this.country = "";
        this.sinceDate = new Date();
        this.toDate = new Date();
    }
}

export default Experience;