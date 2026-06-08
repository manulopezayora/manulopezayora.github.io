export interface Experience {
    period: string;
    position: string;
    positionTags: string[];
    company: string;
    companyLink: string;
    experienceDetail: ExperienceDetail[];
}

export interface ExperienceDetail {
    title?: string;
    description: string[];
}
