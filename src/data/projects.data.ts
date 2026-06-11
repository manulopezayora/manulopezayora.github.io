import type { Project } from '@/interfaces/Project.interface';

export const projectsData: Project[] = [
    {
        title: 'Rock Paper Scissors Lizard Spock Game',
        description:
            'Proyecto realizado con React y TypeScript siguiendo el diseño de Frontend Mentor. Puedes alternar con el modo clásico o "Lizard Spock".',
        demoUrl: 'https://rock-paper-scissors-lizard-spok.netlify.app/',
        repoUrl: 'https://github.com/manulopezayora/rock-paper-scissors-lizard-spock',
        imageUrl: '/images/rock-paper-scissors-lizard-spock.webp',
    },
    {
        title: 'English Verbs Quiz',
        description:
            'Proyecto realizado con Vue y TypeScript para practicar los verbos irregulares en Inglés. Puedes elegir entre diferentes niveles de dificultad y al finalizar recibir un resumen con las respuestas incorrectas para repasar.',
        demoUrl: 'https://english-verbs-quiz.netlify.app/',
        repoUrl: 'https://github.com/manulopezayora/english-verbs-quizz',
        imageUrl: '/images/english-verbs-quiz.webp',
    },
];
