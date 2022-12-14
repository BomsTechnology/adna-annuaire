import { ref, reactive } from "vue";
import { axiosClient, axiosClientFile } from "@/axios";
import { useRouter } from "vue-router";
export default function useCategory() {
  const errors = ref([]);
  const loading = ref(false);
  const categories = ref([]);
  const category = ref([]);

  const router = useRouter();

  const showCategory = reactive({
    filter: false,
    modal: false,
    category: true,
    subCategory: false,
  });

  const selectCategory = reactive({
    category: null,
    subCategory: "all",
  });

  const selectedCategory = async (category) => {
    selectCategory.category = category;
    showCategory.category = false;
    showCategory.subCategory = true;
  };

  const returnCategory = async () => {
    showCategory.category = true;
    showCategory.subCategory = false;
    // showCategory.filter = false;
  };

  const getAllCategories = async () => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/category-companies`);
      categories.value = response.data.data;
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

  const getTopCategories = async () => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/top-categories`);
      categories.value = response.data.data;
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

  const getCategory = async (id) => {
    errors.value = [];
    try {
      loading.value = true;
      let response = await axiosClient.get(`/category-companies/${id}`);
      category.value = response.data.data;
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
    category,
    categories,
    getCategory,
    showCategory,
    selectCategory,
    selectedCategory,
    returnCategory,
    getTopCategories,
    getAllCategories,
  };
}
