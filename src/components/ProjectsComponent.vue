<script setup lang="ts">
import { projectsData } from '@/data/projects.data.ts';
import ProjectBlockComponent from './ProjectBlockComponent.vue';
</script>

<template>
    <section
        id="projects"
        class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
    >
        <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
            </h2>
        </div>
        <div>
            <ul class="group/list">
                <li class="mb-12" v-for="project in projectsData" :key="project.title">
                    <ProjectBlockComponent :project="project" />
                </li>
            </ul>
            <!-- <div class="mt-12">
                <a
                    class="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                    aria-label="View Full Project Archive"
                    href="/archive"
                    ><span
                        ><span class="pb-px transition motion-reduce:transition-none"
                            >View Full Project </span
                        ><span class="whitespace-nowrap"
                            ><span class="pb-px transition motion-reduce:transition-none"
                                >Archive</span
                            ><RightArrow
                                class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 motion-reduce:transition-none" /></span></span
                ></a>
            </div> -->
        </div>
    </section>
</template>
