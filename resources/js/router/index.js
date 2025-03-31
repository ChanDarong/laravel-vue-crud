import { createRouter, createWebHistory } from "vue-router";
import CompanyIndex from "../components/companies/CompanyIndex.vue";
import CompanyCreate from "../components/companies/CompanyCreate.vue";
import CompanyEdit from "../components/companies/CompanyEdit.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex,
        // meta: {
        //     title: 'Companies',
        //     hasHeader: true
        // }
    },
    // {
    //     path: '/companies',
    //     name: 'companies.index',
    //     component: () => import('../components/companies/CompanyIndex.vue'),
    //     meta: {
    //         title: 'Companies',
    //         hasHeader: true
    //     }
    // },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompanyCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompanyEdit,
        props: true
    }
    // companies.create

];

const router = createRouter({
    history: createWebHistory('/laravel-vue/laravel-vue-crud/'),
    routes
});

// Update document title when route changes
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Laravel Vue CRUD';
    next();
});

export default router;
