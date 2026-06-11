<script setup lang="ts">
import NavMenu from './NavMenu.vue';
import SocialLinksComponent from './SocialLinksComponent.vue';
</script>

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
            <NavMenu />
        </div>
        <SocialLinksComponent />
    </header>
</template>
