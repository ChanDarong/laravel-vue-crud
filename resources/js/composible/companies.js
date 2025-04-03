import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Notiflix from "notiflix";

export default function useCompanies() {
    const companies = ref([]);
    const company = ref([]);
    const errors = ref([]);
    const loading = ref(false);
    const router = useRouter();

    const getCompanies = async () => {
        loading.value = true;
        try {
            const response = await axios.get('/laravel-vue/laravel-vue-crud/api/companies');
            companies.value = response.data.data;
            console.log('Companies fetched successfully:', companies.value);

        } catch (err) {
            errors.value = 'Error fetching companies: ' + err.message;
        } finally {
            loading.value = false;
        }
    }

    const getCompany = async (id) => {
        loading.value = true;
        try {
            const response = await axios.get('/laravel-vue/laravel-vue-crud/api/companies/' + id);
            company.value = response.data.data;
            console.log('Companies fetched successfully:', companies.value);

        } catch (err) {
            errors.value = 'Error fetching companies: ' + err.message;
        } finally {
            loading.value = false;
        }
    }


    const storeCompany = async (data) => {
        loading.value = true;
        errors.value = '';
        try {
            await axios.post('/laravel-vue/laravel-vue-crud/api/companies', data);
            await router.push({ name: 'companies.index' });

            Notiflix.Notify.success("Company created successfully");

        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
                Notiflix.Notify.failure("Invalid form input");
            }
        } finally {
            loading.value = false;
        }
    }

    const updateCompany = async (id) => {
        loading.value = true;
        errors.value = '';
        try {
            await axios.put('/laravel-vue/laravel-vue-crud/api/companies/' + id, company.value);
            await router.push({ name: 'companies.index' });

            Notiflix.Notify.success("Company updated successfully");
        } catch (err) {
            if (err.response && err.response.status === 422) {
                errors.value = err.response.data.errors;
                Notiflix.Notify.failure("Invalid form input");
            }
        } finally {
            loading.value = false;
        }
    }

    const destroyCompany = async (id) => {
        loading.value = true;
        try {
            await axios.delete(`/laravel-vue/laravel-vue-crud/api/companies/${id}`);
            Notiflix.Notify.success("Company deleted successfully");
            // companies.value = companies.value.filter(company => company.id !== id);
        } catch (err) {
            errors.value = 'Error deleting company: ' + err.message;
            Notiflix.Notify.failure("Error deleting company");
        } finally {
            loading.value = false;
        }
    }

    return {
        companies,
        errors,
        loading,
        company,
        getCompanies,
        getCompany,
        storeCompany,
        updateCompany,
        destroyCompany
    }
}
