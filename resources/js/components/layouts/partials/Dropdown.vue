<template>

<div class="relative" v-click-outside="close">
    <div @click="open = ! open">
        <slot name="trigger"></slot>
    </div>

    <div v-show="open"
            class="absolute z-50 mt-2 rounded-md shadow-lg"
            :class="[widthClass, alignmentClasses]"
            style="display: none;"
            @click="open = false">
        <div class="rounded-md ring-1 ring-black ring-opacity-5"
            :class="contentClasses">
            <slot name="content"></slot>
        </div>
    </div>
</div>

</template>

<script setup>
import { ref, computed } from 'vue';

// Click outside directive
const vClickOutside = {
    mounted(el, binding) {
        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.removeEventListener('click', el.clickOutsideEvent);
    }
};

const props = defineProps({
    align: {
        type: String,
        default: 'right'
    },
    width: {
        type: String,
        default: '48'
    },
    contentClasses: {
        type: String,
        default: 'py-1 bg-white dark:bg-gray-700'
    }
});

const open = ref(false);

// function to close the dropdown
const close = () => {
    open.value = false;
}

const alignmentClasses = computed(() => {
    switch (props.align) {
        case 'left':
            return 'ltr:origin-top-left rtl:origin-top-right start-0';
        case 'top':
            return 'origin-top';
        case 'right':
        default:
            return 'ltr:origin-top-right rtl:origin-top-left end-0';
    }
});

const widthClass = computed(() => {
    switch (props.width) {
        case '48':
            return 'w-48';
        default:
            return `w-${props.width}`
    }
})

</script>
