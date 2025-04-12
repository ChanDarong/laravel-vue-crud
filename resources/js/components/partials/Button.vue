<template>
    <div class="relative inline-block group focus:outline-none focus:ring cursor-pointer" bis_skin_checked="1">
        <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-1.5 group-hover:translate-x-1.5"
        :class="classes"
        ></span>
        <span class="relative inline-block px-4 py-2 text-xs font-semibold tracking-widest uppercase border-2 border-black dark:border-gray-200 text-white dark:text-black">
            <slot></slot>
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    }
})

const classes = computed(() => {
    switch (props.type) {
        case 'secondary':
            return 'bg-gray-400 dark:bg-gray-500';

        case 'success':
            return 'bg-green-600';

        case 'danger':
            return 'bg-red-600';

        case 'warning':
            return 'bg-yellow-600';

        case 'info':
            return 'bg-cyan-600';

        case 'primary':
        default:
            return 'bg-gray-600 dark:bg-gray-400';
    }
})

</script>
