<template>
    <nav x-data="{ open: false }" class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <router-link :to="{ name: 'dashboard' }">
                            <AppLogo class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        </router-link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <NavLink :to="{ name: 'dashboard' }" :active="routeStartsWith('dashboard')">
                            Dashboard
                        </NavLink>
                        <NavLink :to="{ name: 'companies.index' }" :active="routeStartsWith('companies')">
                            Companies
                        </NavLink>
                        <!-- <NavLink :to="{ name: 'products.index' }" :active="routeStartsWith('products')">
                        Products
                        </NavLink>
                        <NavLink :to="{ name: 'employees.index' }" :active="routeStartsWith('employees')">
                        Employees
                        </NavLink>
                        <NavLink :to="{ name: 'customers.index' }" :active="routeStartsWith('customers')">
                        Customers
                        </NavLink> -->
                        <!-- Add more navigation links as needed -->
                    </div>
                </div>

                <!-- Settings Dropdown -->
                <div class="hidden sm:flex sm:items-center sm:ms-6">
                    <Dropdown align="right" width="48">
                        <template #trigger>
                            <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150">
                                <div>Username</div>

                                <div class="ms-1">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </template>

                        <template #content>
                            <!-- <DropdownLink :to="{ name: 'profile.edit' }">
                                Profile
                            </DropdownLink> -->

                            <!-- Authentication -->
                            <!-- <DropdownLink :to="{ name: 'logout' }" @click.prevent="logout">
                                Log Out
                            </DropdownLink> -->

                            <DropdownLink :to="{ name: 'companies.index' }">
                                Profile
                            </DropdownLink>

                            <!-- Authentication -->
                            <DropdownLink :to="{ name: 'companies.index' }" @click.prevent="logout">
                                Log Out
                            </DropdownLink>
                        </template>
                    </Dropdown>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import AppLogo from './partials/AppLogo.vue';
import Dropdown from './partials/Dropdown.vue';
import DropdownLink from './partials/DropdownLink.vue';
import NavLink from './partials/NavLink.vue';

export default {
    components: {
        AppLogo,
        NavLink,
        Dropdown,
        DropdownLink
    },
    methods: {
        routeStartsWith(prefix) {
            return this.$route.name && this.$route.name.startsWith(prefix);
        },
        logout() {
            // Implement your logout logic here
            // Example:
            // this.$store.dispatch('auth/logout');
            // this.$router.push({ name: 'login' });
        }
    },
    computed: {
        isCompaniesRoute() {
            return this.routeStartsWith('companies');
        }
    }
}
</script>
