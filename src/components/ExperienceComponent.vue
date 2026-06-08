<script setup lang="ts">
import { experience as jobExperience } from '@/data/experience.data.ts';
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
                <li class="mb-12" v-for="experience in jobExperience" :key="experience.company">
                    <ExperienceBlockComponent :experience="experience" />
                </li>
            </ol>

            <div class="mt-12">
                <a
                    class="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base"
                    href="/cv.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span class="group-hover/link:text-teal-300"
                        >CV completo<LinkArrowIcon
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span
                ></a>
            </div>
        </div>
    </section>
</template>
