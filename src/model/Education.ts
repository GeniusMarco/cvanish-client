class Education {
    fieldOfStudy: string;
    level: string;
    university: string;
    city: string;
    country: string;
    sinceDate: Date;
    toDate: Date;


    constructor() {
        this.fieldOfStudy = "";
        this.level = "";
        this.university = "";
        this.city = "";
        this.country = "";
        this.sinceDate = new Date();
        this.toDate = new Date();
    }
}

export default Education;