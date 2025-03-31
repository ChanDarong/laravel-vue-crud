<template>
    <router-link :to="{ name: 'companies.index' }" class="mb-4 block">
        Back to index
    </router-link>

    <div>
        <form class="space-y-6" @submit.prevent="saveCompany">
            <div class="space-y-4">
                <div class="mt-2">
                    <FormLabel>Name</FormLabel>
                    <FormInput v-model="form.name" :class="'w-full'" type="text" placeholder="Enter company name" />
                    <div v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Email</FormLabel>
                    <FormInput v-model="form.email" :class="'w-full'" type="email" placeholder="Enter company email" />
                    <div v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Address</FormLabel>
                    <FormInput v-model="form.address" type="text" :class="'w-full'" placeholder="Enter company address" />
                    <div v-if="errors.address" class="text-red-500 text-sm mt-1">{{ errors.address[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Website</FormLabel>
                    <FormInput v-model="form.website" type="url" :class="'w-full'" placeholder="Enter company website" />
                    <div v-if="errors.website" class="text-red-500 text-sm mt-1">{{ errors.website[0] }}</div>
                </div>
            </div>
            <button type="submit" class="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
                Save Company
            </button>
        </form>
    </div>

</template>

<script setup>
import FormLabel from './forms/Label.vue';
import FormInput from './forms/Input.vue';
import { reactive } from 'vue';
import useCompanies from '../../composible/companies';

const form = reactive({
    name: '',
    email: '',
    address: '',
    website: ''
})

const { errors, storeCompany, loading } = useCompanies();

const saveCompany = async () => {
    await storeCompany({ ...form });
}

</script>

