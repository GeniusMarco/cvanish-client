class Education {
    fieldOfStudy: string;
    university: string;
    city: string;
    country: string;
    sinceDate: Date;
    toDate: Date;


    constructor() {
        this.fieldOfStudy = "";
        this.university = "";
        this.city = "";
        this.country = "";
        this.sinceDate = new Date();
        this.toDate = new Date();
    }
}

export default Education;