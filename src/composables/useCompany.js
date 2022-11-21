import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";
import { useRouter } from "vue-router";
export default function useCompany() {
  const errors = ref([]);
  const loading = ref(false);
  const companies = ref([]);
  const company = ref([]);

  const getAllCompanies = async () => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/companies`);
      companies.value = response.data.data;
      loading.value = false;
    } catch (e) {
      loading.value = 2;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value.push(e.response.data.errors[key][0]);
      } else {
        errors.value.push(e.response.data.message);
      }
    }
  };

  const searchCompanies = async (data) => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.post(`/search-companies`, data);
      companies.value = response.data.data;
      loading.value = false;
    } catch (e) {
      loading.value = 2;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value.push(e.response.data.errors[key][0]);
      } else {
        errors.value.push(e.response.data.message);
      }
    }
  };

  const getByCategory = async (id) => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/companies/category/${id}`);
      companies.value = response.data.data;
      loading.value = false;
    } catch (e) {
      loading.value = 2;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value.push(e.response.data.errors[key][0]);
      } else {
        errors.value.push(e.response.data.message);
      }
    }
  };

  const getCompany = async (id) => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/companies/${id}`);
      company.value = response.data.data;
      loading.value = false;
    } catch (e) {
      loading.value = 2;
      if (e.response.status == 422) {
        for (const key in e.response.data.errors)
          errors.value.push(e.response.data.errors[key][0]);
      } else {
        errors.value.push(e.response.data.message);
      }
    }
  };

  return {
    errors,
    loading,
    company,
    companies,
    getCompany,
    getByCategory,
    searchCompanies,
    getAllCompanies,
  };
}
