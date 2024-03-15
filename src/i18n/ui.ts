
import cv_es from '@/cv-es.json'
import cv_en from '@/cv-en.json'


export const languages = {
    es: { code: 'ES', label: 'Español', flag: '🇪🇸' }, 
    en: { code: 'EN', label: 'English', flag: '🇺🇸' }, 
}

export const defaultLang = 'es'

export const ui = {
    es: {
        'nav.home': 'Inicio',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mi',
        'nav.contact': 'Contacto',
        'nav.cv': 'CV Minimalista',
        'cv': cv_es,
    },
    en: {
        'nav.home': 'Home',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.cv': 'CV Minimalist',
        'cv': cv_en,
    }
} as const
