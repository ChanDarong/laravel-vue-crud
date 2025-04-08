<template>

<router-link :to="routeObject" :class="classes">
    <slot></slot>
</router-link>

</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    active: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      required: true
    }
});

// Update the classes to match the Blade dropdown-link component
const classes = computed(() => {
    return 'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out'
});

const routeObject = computed(() => {
    // If 'to' is a string, assume it's a route name
    if (typeof props.to === 'string') {
        return { name: props.to };
    }
    // Otherwise, return the object as is
    return props.to;
});

</script>
