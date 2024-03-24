
import cv_es from '@/cv-es.json'
import cv_en from '@/cv-en.json'


export const languages = {
    es: { code: 'ES', label: 'Español', flag: '🇪🇸' },
    en: { code: 'EN', label: 'English', flag: '🇺🇸' },
}

export const defaultLang = 'es'

export const ui = {
    es: {
        'page': {
            'title': 'Julio Bustamante',
            'description': 'Contrata a Buscer para crear tu aplicación web. Desarrollador Web. Especializado en desarrollar soluciones web.',
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
    }
} as const
