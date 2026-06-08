<script setup lang="ts">
import { experience as jobExperience } from '@/data/experience.data.ts';
import RightArrow from '@/icons/RightArrow.vue';
import ExperienceBlockComponent from './ExperienceBlockComponent.vue';
</script>

<template>
    <section
        id="experience"
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
    >
        <div
            class="mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
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
                        >CV completo<RightArrow
                            class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" /></span
                ></a>
            </div>
        </div>
    </section>
</template>
