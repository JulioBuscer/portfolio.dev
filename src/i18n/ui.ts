
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
//import type { CvData } from './interfaces/CvData.ts';
//export const cv: CvData =

import type { PageData } from '@/interfaces/PageData.ts';
export const ui: PageData = {
    es: {
        'page': {
            'title': 'Julio Bustamante',
            'description': 'Contrata a Buscer para crear tu aplicación web. Desarrollador Web. Especializado en desarrollar soluciones web.',
            'saludo': {
                'hello': ' Hola, soy Julio Buscer',
                'openToWork': {
                    'available': true,
                    'label': '💼 Disponible para trabajar',
                },
                'experience': 'años de experiencia',
                'rol': 'Desarrollador web.',
                'from': 'de',
                'summary': 'Especializado en desarrollar soluciones web',
            },
        },
        'nav': {
            'home': 'Inicio',
            'about': 'Sobre mi',
            'skills': 'Habilidades',
            'experience': 'Experiencia',
            'projects': 'Proyectos',
            'contact': 'Contacto',
            'education': 'Educación',
            'cv': 'CV',
        },
        'section': {
            'about': 'Sobre mi',
            'skills': 'Habilidades',
            'experience': 'Experiencia',
            'projects': 'Proyectos',
            'education': 'Educación',
        },
        'cv': cv_es,
    },
    en: {
        'page': {
            'title': 'Julio Bustamante',
            'description': 'Contract Buscer to create your web application. Web Developer. Specialized in web application development.',
            'saludo': {
                'hello': 'Hi I´m Julio Buscer',
                'openToWork': {
                    'available': true,
                    'label': '💼 Open To Work',
                },
                'experience': 'years of experience',
                'rol': 'Developer web.',
                'from': 'from',
                'summary': 'Specialized in developing web solutions',
            },
        },
        'nav': {
            'home': 'Home',
            'about': 'About',
            'skills': 'Skills',
            'experience': 'Experience',
            'projects': 'Projects',
            'contact': 'Contact',
            'education': 'Education',
            'cv': 'CV',
        },
        'section': {
            'about': 'About me',
            'skills': 'Skills',
            'experience': 'Experience',
            'projects': 'Projects',
            'education': 'Education',
        },
        'cv': cv_en,
    },
} as const;
