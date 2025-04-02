import { createRouter, createWebHistory } from "vue-router";
import { getCurrentInstance } from "vue"; // Add this import

import Dashboard from "../components/dashboard/Dashboard.vue";
import CompanyIndex from "../components/companies/CompanyIndex.vue";
import CompanyCreate from "../components/companies/CompanyCreate.vue";
import CompanyEdit from "../components/companies/CompanyEdit.vue";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' }
    },
    {
        path: '/companies',
        name: 'companies.index',
        component: CompanyIndex,
        meta: { title: 'Companies List' }
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompanyCreate,
        meta: { title: 'Create Company' }
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompanyEdit,
        props: true,
        meta: { title: 'Edit Company' }
    }
];

const router = createRouter({
    history: createWebHistory('/laravel-vue/laravel-vue-crud/'),
    routes
});

// Updated beforeEach hook to ensure it properly sets the header
router.beforeEach((to, from, next) => {
    // Set document title
    document.title = to.meta.title || 'Laravel Vue CRUD';

    // Directly call the window.setAppHeader function if it exists
    if (to.meta.title && typeof window.setAppHeader === 'function') {
        window.setAppHeader(to.meta.title);
    }

    next();
});

export default router;
