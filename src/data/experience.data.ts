import type { Experience } from '@/interfaces/Experience.interface';

export const experience: Experience[] = [
    {
        period: '2023 — 2025',
        position: 'Senior Frontend Developer',
        positionTags: [
            'Angular',
            'NgRX/Entity',
            'RxJS',
            'React',
            'Redux',
            'TypeScript',
            'GraphQL',
            'Docker',
            'Flutter',
            'Git',
            'GitFlow',
            'Conventional Commits',
        ],
        company: 'Ezzing',
        companyLink: 'https://www.ezzing.com/',
        experienceDetail: [
            {
                description: [
                    'Desarrollé funcionalidades en proyectos internos con Angular 16+, TypeScript, RxJs, NgRX/Entity, SASS y GraphQL, mejorando la mantenibilidad del código y facilitando la evolución del producto',
                    'Desarrollé un MVP con React 18, Redux, Material UI y Axios (RESTful APIs) para conectar instaladores con empresas fotovoltaicas.',
                    'Realicé revisiones de código y promoví buenas prácticas, reduciendo errores en producción.',
                    'Colaboré estrechamente con los equipos de UI/UX y Backend, logrando una integración fluida y una mayor coherencia entre la experiencia de usuario y la lógica de negocio.',
                    'Colaboré en la creación de una librería interna de componentes en React y Angular aplicando principios SOLID y Clean code, reduciendo código duplicado en un 20%.',
                ],
            },
        ],
    },
    {
        period: '2021 — 2023',
        position: 'Frontend Developer',
        positionTags: ['Angular', 'AngularJs', 'NgRX', 'RxJS', 'TypeScript', 'Jenkins', 'WebComponents', 'PrimeNG', 'Karma/Jasmine', 'Jest', 'Git', 'SVN'],
        company: 'NTT DATA',
        companyLink: 'https://es.nttdata.com/',
        experienceDetail: [
            {
                title: 'Proyecto Operador telefonía:',
                description: [
                    'Desarrollé nuevas funcionalidades con AngularJS, Angular 13+',
                    'Typescript, PrimeNG y Unit Testing con Karma/Jasmine y Jest.',
                    'Participé en la refactorización de un proyecto de AngularJS a Angular 13+.',
                    'Trabajé con WebComponents y con integración continua con Jenkins.',
                ],
            },
            {
                title: 'Proyecto para el sector Público:',
                description: [
                    'Desarrollé nuevas funcionalidades con Angular 11+, TypeScript y PrimeNG.',
                    'Definí y realicé seguimiento de buenas prácticas (estructura del proyecto, patrones, mantenibilidad y consistencia de código).',
                    'Gestioné y estandaricé el uso de componentes reutilizables, asegurando coherencia visual, escalabilidad y reduciendo los tiempos de desarrollo de las tareas del equipo un 40%.',
                    'Realicé revisiones de código, soporte al equipo en resolución de incidencias y mejora continua del flujo de trabajo.',
                    'Colaboré con los equipos de UI/UX y Backend, logrando una integración fluida y una mayor coherencia entre la experiencia de usuario y la lógica de negocio.',
                ],
            },
        ],
    },
];
