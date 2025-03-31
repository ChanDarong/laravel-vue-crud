<template>
    <!-- <nav>
        <router-link :to="{ name: 'companies.index' }">Home</router-link> |
        <router-link :to="{ name: 'companies.index' }">Companies</router-link>
    </nav> -->
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
.app {
    margin: 2rem;
    font-family: Arial, sans-serif;
}
nav {
    padding: 1rem 0;
}
nav a {
    margin-right: 10px;
}
</style>
