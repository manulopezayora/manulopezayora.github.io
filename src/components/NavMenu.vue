<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection';
const sections = ['about', 'experience', 'projects', 'articles'];
const { activeSection } = useActiveSection(sections);

const items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    // { id: 'articles', label: 'Articles' },
];

const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <nav class="flex-col hidden lg:flex lg:gap-4">
        <button
            v-for="item in items"
            :key="item.id"
            @click="scrollTo(item.id)"
            :class="['group flex gap-1 items-center transition-colors duration-200 cursor-pointer', activeSection === item.id ? 'text-teal-300' : 'text-slate-400 hover:text-slate-200']"
        >
            <span
                :class="['h-0.5 block transition-all ease-in-out duration-300', activeSection === item.id ? 'w-20 bg-teal-300' : 'w-12 bg-slate-400 group-hover:w-20 group-hover:bg-slate-200']"
            ></span>
            <span>{{ item.label }}</span>
        </button>
    </nav>
</template>
