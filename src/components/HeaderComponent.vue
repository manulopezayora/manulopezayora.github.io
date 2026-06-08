<template>
    <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
    >
        <div class="flex flex-col gap-5">
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Manuel Jesús López Martínez
            </h1>
            <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Senior frontend developer
            </h2>
            <p class="mt-4 max-w-xs leading-normal">
                Especializado en la construcción de experiencias digitales robustas, escalables y
                centradas en el usuario con Angular, React y Vue
            </p>

            <nav class="flex-col hidden lg:flex">
                <RouterLink to="/" class="group flex gap-1 items-center hover:text-slate-200">
                    <span
                        id="nav-line"
                        class="bg-slate-400 w-12 h-0.5 block transition-all ease-in-out duration-300 group-hover:w-20 group-hover:bg-slate-200"
                    ></span>
                    <span class=".nav-link">About</span>
                </RouterLink>
                <RouterLink to="/" class="group flex gap-1 items-center hover:text-slate-200">
                    <span
                        id="nav-line"
                        class="bg-slate-400 w-12 h-0.5 block transition-all ease-in-out duration-300 group-hover:w-20 group-hover:bg-slate-200"
                    ></span>
                    <span class=".nav-link">Experience</span>
                </RouterLink>
                <RouterLink to="/" class="group flex gap-1 items-center hover:text-slate-200">
                    <span
                        id="nav-line"
                        class="bg-slate-400 w-12 h-0.5 block transition-all ease-in-out duration-300 group-hover:w-20 group-hover:bg-slate-200"
                    ></span>
                    <span class=".nav-link">Projects</span>
                </RouterLink>
                <RouterLink to="/" class="group flex gap-1 items-center hover:text-slate-200">
                    <span
                        id="nav-line"
                        class="bg-slate-400 w-12 h-0.5 block transition-all ease-in-out duration-300 group-hover:w-20 group-hover:bg-slate-200"
                    ></span>
                    <span class=".nav-link">Articles</span>
                </RouterLink>
            </nav>
        </div>
        <ul class="flex gap-5 ml-1 mt-8">
            <li>
                <RouterLink to="/" class="hover:text-slate-200">
                    <GitHubIcon class="h-8" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-slate-200">
                    <LinkedInIcon class="h-8" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-slate-200">
                    <CodePenIcon class="h-8" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="hover:text-slate-200">
                    <InstagramIcon class="h-8" />
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import CodePenIcon from '@/icons/CodePenIcon.vue';
import GitHubIcon from '@/icons/GitHubIcon.vue';
import InstagramIcon from '@/icons/InstagramIcon.vue';
import LinkedInIcon from '@/icons/LinkedInIcon.vue';
</script>
