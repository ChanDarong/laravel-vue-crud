<template>
    <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Reset your password</h2>
            </div>

            <form class="mt-8 space-y-6" @submit.prevent="resetUserPassword">
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
                        <FormLabel>New Password</FormLabel>
                        <FormInput
                            v-model="form.password"
                            type="password"
                            class="w-full"
                            placeholder="Your new password"
                            required
                        />
                        <div v-if="errors.password" class="text-red-600 text-sm mt-1">{{ errors.password[0] }}</div>
                    </div>

                    <div>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormInput
                            v-model="form.password_confirmation"
                            type="password"
                            class="w-full"
                            placeholder="Confirm your new password"
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
                        <span v-else>Reset Password</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import FormLabel from '../companies/forms/Label.vue';
import FormInput from '../companies/forms/Input.vue';
import useAuth from '../../composible/auth';
import { useRoute } from 'vue-router';

const route = useRoute();
const { resetPassword, errors, loading } = useAuth();

const form = reactive({
    email: '',
    password: '',
    password_confirmation: '',
    token: ''
});

onMounted(() => {
    // Get token from the route params
    form.token = route.params.token;

    // If email is provided in the query parameters, set it
    if (route.query.email) {
        form.email = route.query.email;
    }
});

const resetUserPassword = async () => {
    await resetPassword(form);
};
</script>
