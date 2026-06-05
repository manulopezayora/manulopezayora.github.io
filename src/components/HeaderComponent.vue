<template>
    <div class="relative flex flex-col flex-1">
        <header class="px-10 py-15 flex flex-col gap-5 lg:min-h-dvh lg:sticky lg:top-1 lg:justify-between">
            <div class="flex flex-col gap-5">
                <h1 class="text-3xl font-bold text-gray-100">Manuel Jesús López Martínez</h1>
                <h2 class="text-2xl text-gray-100">Senior frontend developer</h2>
                <p class="text-lg text-gray-400">Especializado en la construcción de experiencias digitales robustas, escalables y centradas en el usuario con Angular, React y Vue</p>

                <nav class="flex-col hidden lg:flex">
                    <RouterLink to="/" class="flex gap-1 items-center text-gray-400 hover:text-gray-200 active:text-shadow-teal-400">
                        <span id="nav-line" class=".nav-line"></span>
                        <span class=".nav-link">About</span>
                    </RouterLink>
                    <RouterLink to="/" class="flex gap-1 items-center text-gray-400 hover:text-gray-200">
                        <span id="nav-line" class=".nav-line"></span>
                        <span class=".nav-link">Experience</span>
                    </RouterLink>
                    <RouterLink to="/" class="flex gap-1 items-center text-gray-400 hover:text-gray-200">
                        <span id="nav-line" class=".nav-line"></span>
                        <span class=".nav-link">Projects</span>
                    </RouterLink>
                    <RouterLink to="/" class="flex gap-1 items-center text-gray-400 hover:text-gray-200">
                        <span id="nav-line" class=".nav-line"></span>
                        <span class=".nav-link">Articles</span>
                    </RouterLink>
                </nav>
            </div>
            <ul class="social-links flex gap-5">
                <li>
                    <RouterLink to="/" class="text-gray-400 hover:text-gray-200">
                        <GitHubIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="text-gray-400 hover:text-gray-200">
                        <LinkedInIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="text-gray-400 hover:text-gray-200">
                        <CodePenIcon />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/" class="text-gray-400 hover:text-gray-200">
                        <InstagramIcon />
                    </RouterLink>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup lang="ts">
import CodePenIcon from '@/icons/CodePenIcon.vue';
import GitHubIcon from '@/icons/GitHubIcon.vue';
import InstagramIcon from '@/icons/InstagramIcon.vue';
import LinkedInIcon from '@/icons/LinkedInIcon.vue';
</script>

<style scoped>
#nav-line {
    display: block;
    background-color: #99a1af;
    width: 50px;
    height: 2px;
    transition: ease-in-out 0.2s;
}

a:hover #nav-line {
    background-color: #e5e7eb;
    width: 80px;
}

svg {
    height: 30px;
}
</style>
