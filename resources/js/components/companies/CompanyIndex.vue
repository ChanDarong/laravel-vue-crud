<template>
    <div class="mb-4 flex justify-end">
        <router-link :to="{ name: 'companies.create' }">
            <Button type="primary">
                Create Company
            </Button>
        </router-link>

    </div>

    <div class="relative overflow-x-auto sm:rounded-lg border border-gray-800 dark:border-gray-600 overflow-hidden">
        <table class="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
            <thead class="text-xs text-gray-800 uppercase bg-gray-50 border-b border-gray-800 dark:bg-gray-700 dark:text-gray-300 font-bold">
                <tr class="text-center">
                    <th scope="col" class="px-6 py-4">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Address
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Website
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>

                <template v-for="company in companies" :key="company.id">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4 text-center">{{ company.id }}</td>
                        <td class="px-6 py-4">{{ company.name }}</td>
                        <td class="px-6 py-4">{{ company.email }}</td>
                        <td class="px-6 py-4">{{ company.address }}</td>
                        <td class="px-6 py-4">{{ company.website }}</td>
                        <td class="px-6 py-4 text-center">
                            <router-link :to="{ name: 'companies.edit', params: { id: company.id } }" class="mx-2">
                                <Button type="secondary">
                                    Edit
                                </Button>
                            </router-link>
                            <button @click="deleteCompany(company.id)" class="mx-2">
                                <Button type="danger">
                                    Delete
                                </Button>
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

</template>

<script>
import useCompanies from '../../composible/companies';
import { onMounted } from 'vue';
import Notiflix from "notiflix";
import Button from '../partials/Button.vue';

export default {
    name: 'CompanyIndex',
    components: {
        Button
    },
    setup() {
        const { companies, error, loading, getCompanies, destroyCompany } = useCompanies();

        onMounted(() => {
            getCompanies();
        });

        const deleteCompany = async (id) => {
            // if (confirm('Are you sure you want to delete this company?')) {
            //     await destroyCompany(id);
            //     getCompanies();
            // }
            Notiflix.Confirm.show(
                'Are you sure?',
                'You won\'t be able to revert this!',
                'Confirm',
                'Cancel',
                async function okCb() {
                    await destroyCompany(id);
                    getCompanies();
                },
                function cancelCb() {

                },
                {
                },
            );
        };

        return {
            companies,
            error,
            loading,
            deleteCompany,
        };
    }
}
</script>
