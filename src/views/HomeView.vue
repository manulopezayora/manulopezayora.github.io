<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
</script>

<template>
    <div class="relative">
        <div class="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div class="lg:flex lg:justify-between lg:gap-4">
                <HeaderComponent />
                <MainComponent />
            </div>
        </div>
    </div>
</template>
