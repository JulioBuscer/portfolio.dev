
import { cv as cv_es } from '@/traductions/cv/es'
import { cv as cv_en } from '@/traductions/cv/en'

export type Languages = {
    code: string
    label: string
    flag: string
}

export const languages = {
    es: { code: 'ES', label: 'Español', flag: '🇪🇸' } as Languages,
    en: { code: 'EN', label: 'English', flag: '🇺🇸' } as Languages,
}

export const defaultLang = 'es'

import type { PageData } from '@/interfaces/PageData.ts';
export const ui: PageData = {
    es: {
        page: {
            title: 'Julio Bustamante',
            description: 'Contrata a Buscer para crear tu aplicación web. Desarrollador Web. Especializado en desarrollar soluciones web.',
            saludo: {
                hello: ' Hola, soy Julio Buscer',
                openToWork: {
                    available: true,
                    label: '💼 Disponible para trabajar',
                },
                experience: 'años de experiencia',
                rol: 'Desarrollador web.',
                from: 'de',
                summary: 'Especializado en desarrollar soluciones web',
            },
        },
        nav: {
            home: 'Inicio',
            about: 'Sobre mi',
            skills: 'Habilidades',
            experience: 'Experiencia',
            projects: 'Proyectos',
            contact: 'Contacto',
            education: 'Educación',
            cv: 'Formato CV',
            portfolio: 'Porfolio',
        },
        section: {
            about: 'Sobre mi',
            languages: 'Idiomas',
            skills: 'Habilidades',
            experience: 'Experiencia',
            projects: 'Proyectos',
            featuredProjects: 'Proyectos Destacados',
            otherProjects: 'Otros Proyectos',
            education: 'Educación',
            personalProject: 'Personal',
        },
        cv: cv_es,
    },
    en: {
        page: {
            title: 'Julio Bustamante',
            description: 'Contract Buscer to create your web application. Web Developer. Specialized in web application development.',
            saludo: {
                hello: 'Hi I´m Julio Buscer',
                openToWork: {
                    available: true,
                    label: '💼 Open To Work',
                },
                experience: 'years of experience',
                rol: 'Developer web.',
                from: 'from',
                summary: 'Specialized in developing web solutions',
            },
        },
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact',
            education: 'Education',
            cv: 'CV Format',
            portfolio: 'Portfolio',
        },
        section: {
            about: 'About me',
            languages: 'Languages',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            featuredProjects: 'Featured Projects',
            otherProjects: 'Other Projects',
            education: 'Education',
            personalProject: 'Personal',
        },
        cv: cv_en,
    },
} as const;
