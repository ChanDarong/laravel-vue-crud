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
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from './partials/AppLogo.vue';
import NavLink from './partials/NavLink.vue';

export default {
  components: {
    AppLogo,
    NavLink
  },
  methods: {
    routeStartsWith(prefix) {
      return this.$route.name && this.$route.name.startsWith(prefix);
    }
  },
  computed: {
    isCompaniesRoute() {
      return this.routeStartsWith('companies');
    }
  }
}
</script>
