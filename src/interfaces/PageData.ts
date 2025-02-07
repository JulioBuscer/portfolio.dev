import type { CvData } from './CvData.ts';

export type Saludo = {
    hello: string;
    openToWork: {
        available: boolean;
        label: string;
    };
    experience: string;
    rol: string;
    from: string;
    summary: string;
}

export type Nav = {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    education: string;
    cv: string;
    portfolio: string;
}

export type Section = {
    about: string;
    languages: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    featuredProjects: string;
    otherProjects: string;
    personalProject: string;
}
export interface Page {
    title: string;
    description: string;
    saludo: Saludo;
}
export type PageData = {
    es: {
        page: Page
        nav: Nav;
        section: Section;
        cv: CvData;
    };
    en: {
        page: Page
        nav: Nav;
        section: Section;
        cv: CvData;
    };
};