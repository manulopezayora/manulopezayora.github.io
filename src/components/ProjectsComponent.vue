<script setup lang="ts">
import { projectsData } from '@/data/projects.data.ts';
import ProjectBlockComponent from './ProjectBlockComponent.vue';
</script>

<template>
    <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div
            class="mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
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
        </div>
    </section>
</template>
