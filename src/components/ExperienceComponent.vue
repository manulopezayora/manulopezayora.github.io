<script setup lang="ts">
import LinkArrowIcon from '@/icons/LinkArrowIcon.vue';
import ExperienceBlockComponent from './ExperienceBlockComponent.vue';
</script>

<template>
    <section
        id="experience"
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
    >
        <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
            </h2>
        </div>
        <div>
            <ol class="group/list">
                <li class="mb-12">
                    <ExperienceBlockComponent
                        period="2023 — 2025"
                        position="Senior Frontend Developer"
                        :positionTags="[
                            'Angular',
                            'NgRX/Entity',
                            'RxJS',
                            'React',
                            'Redux',
                            'TypeScript',
                            'GraphQL',
                            'Docker',
                            'Flutter',
                        ]"
                        company="Ezzing"
                        companyLink="https://www.ezzing.com/"
                        companyAriaLabel="Senior Frontend Developer at Ezzing (opens in a new tab)"
                    >
                        <p class="mt-2 text-sm leading-normal">
                            Desarrollé funcionalidades en proyectos internos con Angular 16+,
                            TypeScript, RxJs, NgRX/Entity, SASS y GraphQL, mejorando la
                            mantenibilidad del código y facilitando la evolución del producto.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Desarrollé un MVP con React 18, Redux, Material UI y Axios (RESTful
                            APIs) para conectar instaladores con empresas fotovoltaicas.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Colaboré en la creación de una librería interna de componentes en React
                            y Angular aplicando principios SOLID y Clean code, reduciendo código
                            duplicado en un 20%.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Realicé revisiones de código y promoví buenas prácticas, reduciendo
                            errores en producción.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Colaboré estrechamente con los equipos de UI/UX y Backend, logrando una
                            integración fluida y una mayor coherencia entre la experiencia de
                            usuario y la lógica de negocio.
                        </p>
                    </ExperienceBlockComponent>
                </li>
                <li class="mb-12">
                    <ExperienceBlockComponent
                        period="2021 — 2023"
                        position="Frontend Developer"
                        :positionTags="['Angular', 'NgRX', 'RxJS', 'TypeScript']"
                        company="NTT DATA"
                        companyLink="https://es.nttdata.com/"
                        companyAriaLabel="Frontend Developer at NTT DATA (opens in a new tab)"
                    >
                        <h3 class="font-semibold">Proyecto Operador telefonía:</h3>
                        <p class="mt-2 text-sm leading-normal">
                            Desarrollé nuevas funcionalidades con AngularJS, Angular 13+,
                            Typescript, PrimeNG y Unit Testing con Karma/Jasmine y Jest.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Participé en la refactorización de un proyecto de AngularJS a Angular
                            13+.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Trabajé con WebComponents y con integración continua con Jenkins.
                        </p>
                        <p class="mt-2 text-sm leading-normal">
                            Trabajé con WebComponents y con integración continua con Jenkins.
                        </p>
                    </ExperienceBlockComponent>
                </li>
            </ol>

            <div class="mt-12">
                <a
                    class="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Resume (opens in a new tab)"
                >
                    <span class="group-hover/link:text-teal-300"
                        >CV completo<LinkArrowIcon
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span
                ></a>
            </div>
        </div>
    </section>
</template>
