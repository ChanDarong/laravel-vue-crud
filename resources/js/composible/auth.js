import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Notiflix from "notiflix";

export default function useAuth() {
    const user = ref(null);
    const errors = ref([]);
    const loading = ref(false);
    const router = useRouter();

    // Check if user is authenticated
    const isAuthenticated = computed(() => !!user.value);

    // Initialize - check if user is already logged in
    const initAuth = async () => {
        loading.value = true;
        try {
            const response = await axios.get('/laravel-vue/laravel-vue-crud/api/user');
            user.value = response.data;
        } catch (err) {
            user.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Login method
    const login = async (credentials) => {
        loading.value = true;
        errors.value = [];

        try {
            // First, get CSRF cookie
            await axios.get('/laravel-vue/laravel-vue-crud/sanctum/csrf-cookie');

            // Then attempt login
            await axios.post('/laravel-vue/laravel-vue-crud/api/login', credentials);

            // If successful, get user data
            const response = await axios.get('/laravel-vue/laravel-vue-crud/api/user');
            user.value = response.data;

            Notiflix.Notify.success("Logged in successfully");
            router.push({ name: 'dashboard' });

        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else if (err.response && err.response.data.message) {
                Notiflix.Notify.failure(err.response.data.message);
            } else {
                Notiflix.Notify.failure("Login failed. Please try again.");
            }
        } finally {
            loading.value = false;
        }
    };

    // Register method
    const register = async (userData) => {
        loading.value = true;
        errors.value = [];

        try {
            // Get CSRF cookie
            await axios.get('/laravel-vue/laravel-vue-crud/sanctum/csrf-cookie');

            // Attempt registration
            await axios.post('/laravel-vue/laravel-vue-crud/api/register', userData);

            // If successful, get user data
            const response = await axios.get('/laravel-vue/laravel-vue-crud/api/user');
            user.value = response.data;

            Notiflix.Notify.success("Registration successful!");
            router.push({ name: 'dashboard' });

        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else {
                Notiflix.Notify.failure("Registration failed. Please try again.");
            }
        } finally {
            loading.value = false;
        }
    };

    // Logout method
    const logout = async () => {
        loading.value = true;

        try {
            await axios.post('/laravel-vue/laravel-vue-crud/api/logout');
            user.value = null;
            Notiflix.Notify.success("Logged out successfully");
            router.push({ name: 'login' });

        } catch (err) {
            Notiflix.Notify.failure("Logout failed");
        } finally {
            loading.value = false;
        }
    };

    // Forgot password
    const forgotPassword = async (email) => {
        loading.value = true;
        errors.value = [];

        try {
            await axios.post('/laravel-vue/laravel-vue-crud/api/forgot-password', { email });
            Notiflix.Notify.success("Password reset link sent to your email");
            router.push({ name: 'login' });

        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else {
                Notiflix.Notify.failure("Failed to send reset link. Please try again.");
            }
        } finally {
            loading.value = false;
        }
    };

    // Reset password
    const resetPassword = async (formData) => {
        loading.value = true;
        errors.value = [];

        try {
            await axios.post('/laravel-vue/laravel-vue-crud/api/reset-password', formData);
            Notiflix.Notify.success("Password reset successfully");
            router.push({ name: 'login' });

        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
            } else {
                Notiflix.Notify.failure("Failed to reset password. Please try again.");
            }
        } finally {
            loading.value = false;
        }
    };

    return {
        user,
        errors,
        loading,
        isAuthenticated,
        initAuth,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword
    };
}
