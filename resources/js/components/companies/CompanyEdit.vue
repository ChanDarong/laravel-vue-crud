<template>
    <div v-if="loading">Loading company data...</div>

    <div v-else>
        <form class="space-y-6" @submit.prevent="saveCompany">
            <div class="space-y-4">
                <div class="mt-2">
                    <FormLabel>Name</FormLabel>
                    <FormInput v-model="company.name" :class="'w-full'" type="text" placeholder="Enter company name" />
                    <div v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Email</FormLabel>
                    <FormInput v-model="company.email" :class="'w-full'" type="email" placeholder="Enter company email" />
                    <div v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Address</FormLabel>
                    <FormInput v-model="company.address" type="text" :class="'w-full'" placeholder="Enter company address" />
                    <div v-if="errors.address" class="text-red-600 text-sm mt-1">{{ errors.address[0] }}</div>
                </div>
                <div class="mt-2">
                    <FormLabel>Website</FormLabel>
                    <FormInput v-model="company.website" type="url" :class="'w-full'" placeholder="Enter company website" />
                    <div v-if="errors.website" class="text-red-600 text-sm mt-1">{{ errors.website[0] }}</div>
                </div>
            </div>
            <div class="flex justify-between">
                <router-link :to="{ name: 'companies.index' }" class="mb-4">
                    Back to index
                </router-link>
                <SaveButton>Save Company</SaveButton>
            </div>

        </form>
    </div>

</template>

<script setup>
import FormLabel from './forms/Label.vue';
import FormInput from './forms/Input.vue';
import SaveButton from './forms/SaveButton.vue';

import { reactive, onMounted, watch } from 'vue';
import useCompanies from '../../composible/companies';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const form = reactive({
    name: '',
    email: '',
    address: '',
    website: ''
})

const { errors, getCompany, updateCompany, company, loading } = useCompanies();

// watch for change in the company data and update the form
// watch(company, (newCompany) => {
//     if (newCompany) {
//         form.name = newCompany.name;
//         form.email = newCompany.email;
//         form.address = newCompany.address;
//         form.website = newCompany.website;
//     }
// }, { immediate: true })

// load the company data when the component mounts
onMounted(() => {
    getCompany(props.id)
});

const saveCompany = async () => {
    await updateCompany(props.id);
}

</script>

