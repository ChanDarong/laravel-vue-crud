<template>
    <!-- Navbar -->
    <Navigation/>

    <!-- header -->
    <header v-if="header" class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 dark:text-white">
            {{ header }}
        </div>
    </header>

    <main>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Navigation from './components/layouts/Navigation.vue';
import { ref, provide } from 'vue';

export default {
    name: 'App',
    components: {
        Navigation
    },
    setup() {
        const header = ref('');

        // Provide header and setter function to child components
        provide('header', header);
        provide('setHeader', (value) => {
            header.value = value;
        });

        // Expose the setter globally for the router to use
        window.setAppHeader = (value) => {
            header.value = value;
        };

        return {
            header
        }
    }
}
</script>
