<template>
    <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Create a new account</h2>
            </div>

            <form class="mt-8 space-y-6" @submit.prevent="registerUser">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <FormLabel>Name</FormLabel>
                        <FormInput
                            v-model="form.name"
                            type="text"
                            class="w-full"
                            placeholder="Your full name"
                            required
                        />
                        <div v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name[0] }}</div>
                    </div>

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

                    <div>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput
                            v-model="form.password_confirmation"
                            type="password"
                            class="w-full"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        :disabled="loading"
                    >
                        <span v-if="loading">Processing...</span>
                        <span v-else>Create Account</span>
                    </button>
                </div>
            </form>

            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <router-link :to="{ name: 'login' }" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Sign in
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import FormLabel from '../companies/forms/Label.vue';
import FormInput from '../companies/forms/Input.vue';
import useAuth from '../../composible/auth';

const { register, errors, loading } = useAuth();

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const registerUser = async () => {
    await register(form);
};
</script>
