<script setup lang="ts">
import CodePenIcon from '@/icons/CodePenIcon.vue';
import GitHubIcon from '@/icons/GitHubIcon.vue';
import InstagramIcon from '@/icons/InstagramIcon.vue';
import LinkedInIcon from '@/icons/LinkedInIcon.vue';
import type { Component } from 'vue';

const items: { name: string; icon: Component; url: string }[] = [
    {
        name: 'GitHub',
        icon: GitHubIcon,
        url: 'https://github.com/manulopezayora',
    },
    {
        name: 'LinkedIn',
        icon: LinkedInIcon,
        url: 'https://linkedin.com/in/manulopezayora',
    },
    {
        name: 'CodePen',
        icon: CodePenIcon,
        url: 'https://codepen.io/manueljesuslopez',
    },
    {
        name: 'Instagram',
        icon: InstagramIcon,
        url: 'https://instagram.com/manulopezayora1985',
    },
];
</script>

<template>
    <ul class="flex gap-5 ml-1 mt-8">
        <li v-for="icon in items" :key="icon.name">
            <a
                class="hover:text-teal-300"
                :href="icon.url"
                target="_blank"
                rel="noreferrer noopener"
            >
                <component :is="icon.icon" class="h-8" />
            </a>
        </li>
    </ul>
</template>
