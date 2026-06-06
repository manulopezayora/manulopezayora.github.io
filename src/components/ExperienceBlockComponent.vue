<script setup lang="ts">
import LinkArrowIcon from '@/icons/LinkArrowIcon.vue';

interface Props {
    period: string;
    position: string;
    positionTags: string[];
    company: string;
    companyLink: string;
    companyAriaLabel: string;
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
            :aria-label="period"
        >
            {{ period }}
        </header>
        <div class="z-10 sm:col-span-6">
            <h3 class="font-medium leading-snug text-slate-200">
                <div>
                    <a
                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
                        :href="companyLink"
                        target="_blank"
                        rel="noreferrer noopener"
                        :aria-label="companyAriaLabel"
                    >
                        <span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                        >
                        </span>
                        <span class="group-hover:text-teal-300"
                            >{{ position }} ·
                            <span class="inline-block">{{ company }}</span>
                            <LinkArrowIcon
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            />
                        </span>
                    </a>
                </div>
            </h3>
            <slot />
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li class="mr-1.5 mt-2" v-for="tag in positionTags" :key="tag">
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
