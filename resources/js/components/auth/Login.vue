<template>
    <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
            </div>

            <form class="mt-8 space-y-6" @submit.prevent="loginUser">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            v-model="form.email"
                            type="email"
                            class="w-full"
                            placeholder="Your email"
                            required
                        />
                        <div v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</div>
                    </div>

                    <div>
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            v-model="form.password"
                            type="password"
                            class="w-full"
                            placeholder="Your password"
                            required
                        />
                        <div v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password[0] }}</div>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            v-model="form.remember"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        >
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <router-link :to="{ name: 'forgot-password' }" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Forgot your password?
                        </router-link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        :disabled="loading"
                    >
                        <span v-if="loading">Processing...</span>
                        <span v-else>Sign in</span>
                    </button>
                </div>
            </form>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?
                    <router-link :to="{ name: 'register' }" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Sign up
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import FormLabel from '../companies/forms/Label.vue';
import FormInput from '../companies/forms/Input.vue';
import useAuth from '../../composible/auth';

const { login, errors, loading } = useAuth();

const form = reactive({
    email: '',
    password: '',
    remember: false
});

const loginUser = async () => {
    await login(form);
};
</script>
