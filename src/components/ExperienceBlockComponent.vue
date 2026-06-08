<script setup lang="ts">
import LinkArrowIcon from '@/icons/LinkArrowIcon.vue';
import type { Experience } from '@/interfaces/Experience.interface';

interface Props {
    experience: Experience;
}
defineProps<Props>();
</script>

<template>
    <div
        class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100 lg:group-hover/list:opacity-50"
    >
        <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
        ></div>
        <header
            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        >
            {{ experience.period }}
        </header>
        <div class="z-10 sm:col-span-6">
            <h3 class="font-medium leading-snug text-slate-200">
                <div>
                    <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
                        :href="experience.companyLink"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                        >
                        </span>
                        <span class="group-hover:text-teal-300"
                            >{{ experience.position }} ·
                            <span class="inline-block">{{ experience.company }}</span>
                            <LinkArrowIcon
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            />
                        </span>
                    </a>
                </div>
            </h3>
            <div v-for="(detail, index) in experience.experienceDetail" :key="index">
                <h3 class="font-semibold my-3" v-if="detail.title">{{ detail.title }}</h3>
                <ul>
                    <li
                        class="mt-2 text-sm leading-normal list-disc list-inside"
                        v-for="(description, index) in detail.description"
                        :key="index"
                    >
                        {{ description }}
                    </li>
                </ul>
            </div>

            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li class="mr-1.5 mt-2" v-for="tag in experience.positionTags" :key="tag">
                    <div
                        class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                    >
                        {{ tag }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
