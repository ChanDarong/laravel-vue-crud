import { createRouter, createWebHistory } from "vue-router";

// Main components
import Dashboard from "../components/dashboard/Dashboard.vue";
import CompanyIndex from "../components/companies/CompanyIndex.vue";
import CompanyCreate from "../components/companies/CompanyCreate.vue";
import CompanyEdit from "../components/companies/CompanyEdit.vue";

// Auth components
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import ForgotPassword from "../components/auth/ForgotPassword.vue";
import ResetPassword from "../components/auth/ResetPassword.vue";

// Import auth composable
import useAuth from "../composible/auth";

const routes = [
    // Auth routes (non-protected)
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'Register',
            requiresAuth: false
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'Forgot Password',
            requiresAuth: false
        }
    },
    {
        path: '/reset-password/:token',
        name: 'reset-password',
        component: ResetPassword,
        props: true,
        meta: {
            title: 'Reset Password',
            requiresAuth: false
        }
    },

    // Protected routes
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            requiresAuth: true
        }
    },
    {
        path: '/companies',
        name: 'companies.index',
        component: CompanyIndex,
        meta: {
            title: 'Companies List',
            requiresAuth: true
        }
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompanyCreate,
        meta: {
            title: 'Create Company',
            requiresAuth: true
        }
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompanyEdit,
        props: true,
        meta: {
            title: 'Edit Company',
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory('/laravel-vue/laravel-vue-crud/'),
    routes
});

// Navigation guards
router.beforeEach(async (to, from, next) => {
    // Set document title
    document.title = to.meta.title || 'Laravel Vue CRUD';

    // Set application header if function exists
    if (to.meta.title && typeof window.setAppHeader === 'function') {
        window.setAppHeader(to.meta.title);
    }

    // Check authentication for protected routes
    const { isAuthenticated, initAuth } = useAuth();

    // If route requires authentication
    if (to.meta.requiresAuth !== undefined) {
        // For protected routes
        if (to.meta.requiresAuth) {
            // Initialize authentication if needed
            await initAuth();

            // If not authenticated, redirect to login
            if (!isAuthenticated.value) {
                return next({ name: 'login' });
            }
        }
        // For auth routes (login, register, etc.), redirect to dashboard if already authenticated
        else if (!to.meta.requiresAuth) {
            await initAuth();

            if (isAuthenticated.value) {
                return next({ name: 'dashboard' });
            }
        }
    }

    next();
});

export default router;
