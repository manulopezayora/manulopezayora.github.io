<script lang="ts" setup>
import LinkArrowIcon from '@/icons/LinkArrowIcon.vue';
import LinkIcon from '@/icons/LinkIcon.vue';
import type { Project } from '@/interfaces/Project.interface';

interface Props {
    project: Project;
}

defineProps<Props>();
</script>

<template>
    <div
        class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50"
    >
        <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
        ></div>
        <div class="z-10 sm:order-2 sm:col-span-6">
            <h3>
                <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
                    :href="project.demoUrl"
                    target="_blank"
                    rel="noreferrer noopener"
                    ><span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                    ></span
                    ><span
                        >{{ project.title }}
                        <span class="inline-block"
                            ><LinkArrowIcon
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            /> </span></span
                ></a>
            </h3>
            <p class="mt-2 text-sm leading-normal">{{ project.description }}</p>
            <ul class="mt-2 flex flex-wrap group/link">
                <li class="mr-4">
                    <a
                        class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300"
                        :href="project.repoUrl"
                        target="_blank"
                        rel="noreferrer noopener"
                        ><LinkIcon class="mr-1 h-3 w-3" /><span>Enlace al repositorio</span></a
                    >
                </li>
            </ul>
        </div>
        <img
            :alt="`Imagen de vista previa del proyecto ${project.title}`"
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style="color: transparent"
            :srcset="project.imageUrl"
            :src="project.imageUrl"
        />
    </div>
</template>

<style scoped>
a:hover {
    color: #4fd1c5;
}
</style>
