import { onMounted, onUnmounted, ref } from 'vue';

export const useActiveSection = (sectionIds: string[]) => {
    const activeSection = ref<string | null>();

    let observer: IntersectionObserver;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            },
        );

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });
    });

    onUnmounted(() => observer?.disconnect());

    return { activeSection };
};
