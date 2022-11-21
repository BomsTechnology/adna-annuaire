import { ref } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";
import { useRouter } from "vue-router";
export default function useCountry() {
  const errors = ref([]);
  const loading = ref(false);
  const countries = ref([]);
  const country = ref([]);

  const router = useRouter();
  const getAllCountries = async () => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/countries`);
      countries.value = response.data.data;
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

  const getCountry = async (id) => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/countries/${id}`);
      country.value = response.data.data;
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
    country,
    countries,
    getCountry,
    getAllCountries,
  };
}
