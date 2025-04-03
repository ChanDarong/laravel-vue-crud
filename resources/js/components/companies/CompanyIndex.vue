<template>
    <div class="my-4 flex justify-end">
        <router-link :to="{ name: 'companies.create' }" class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 mb-4">
            Create Company
        </router-link>
    </div>
    <table class="border-collapse border border-gray-400 w-full">
        <thead class="bg-gray-200">
            <tr>
                <th class=" border py-2">ID</th>
                <th class=" border py-2">Name</th>
                <th class=" border py-2">Email</th>
                <th class=" border py-2">Address</th>
                <th class=" border py-2">Website</th>
                <th class=" border py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="company in companies" :key="company.id">
                <tr class="hover:bg-gray-100">
                    <td class=" border py-2 px-2 text-center">{{ company.id }}</td>
                    <td class=" border py-2 px-2">{{ company.name }}</td>
                    <td class=" border py-2 px-2">{{ company.email }}</td>
                    <td class=" border py-2 px-2">{{ company.address }}</td>
                    <td class=" border py-2 px-2">{{ company.website }}</td>
                    <td class="border py-2 px-2 text-center">
                        <router-link :to="{ name: 'companies.edit', params: { id: company.id } }" class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                            Edit
                        </router-link>
                        <button @click="deleteCompany(company.id)" class="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                            Delete
                        </button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
    import useCompanies from '../../composible/companies';
    import { onMounted } from 'vue';
    import Notiflix from "notiflix";

    export default {
        name: 'CompanyIndex',
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
