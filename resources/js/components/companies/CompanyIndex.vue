<template>
    <div class=" my-4">
        <router-link :to="{ name: 'companies.create' }" class="bg-blue-500 text-black px-4 mb-4 rounded block">
            Create Company
        </router-link>
    </div>
    <table class="border-collapse border border-gray-400 w-full">
        <thead class="bg-gray-200">
            <tr>
                <th class=" border py-3">ID</th>
                <th class=" border py-3">Name</th>
                <th class=" border py-3">Email</th>
                <th class=" border py-3">Address</th>
                <th class=" border py-3">Website</th>
                <th class=" border px-4 py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="company in companies" :key="company.id">
                <tr class="hover:bg-gray-100">
                    <td class=" border">{{ company.id }}</td>
                    <td class=" border">{{ company.name }}</td>
                    <td class=" border">{{ company.email }}</td>
                    <td class=" border">{{ company.address }}c</td>
                    <td class=" border">{{ company.website }}c</td>
                    <td class="border">
                        <router-link :to="{ name: 'companies.edit', params: { id: company.id } }" class="mr-2 bg-red-500 text-white px-4 py-2 rounded">
                            Edit
                        </router-link>
                        <button @click="deleteCompany(company.id)" class="bg-red-500 text-white px-4 py-2 rounded">
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

    export default {
        name: 'CompanyIndex',
        setup() {
            const { companies, error, loading, getCompanies, destroyCompany } = useCompanies();

            onMounted(getCompanies);

            const storeCompany = async () => {
                await storeCompany();
                getCompanies();
            };

            const deleteCompany = async (id) => {
                if (confirm('Are you sure you want to delete this company?')) {
                    await destroyCompany(id);
                    getCompanies();
                }
            };

            return {
                companies,
                error,
                loading,
                getCompanies,
                deleteCompany,
            };
        }
    }
</script>
