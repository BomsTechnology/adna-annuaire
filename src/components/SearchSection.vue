<script setup>
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref, reactive } from "vue";
import useCountry from "@/composables/useCountry";
import useCategory from "@/composables/useCategory";
import {
  onClickOutside,
  breakpointsTailwind,
  useBreakpoints,
} from "@vueuse/core";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  RectangleStackIcon,
} from "@heroicons/vue/24/solid";

const breakPoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakPoints.greater("xl");
const props = defineProps({
  data: { required: false, type: Object },
});
const {
  getAllCategories,
  categories,
  showCategory,
  selectCategory,
  selectedCategory,
  returnCategory,
} = useCategory();

const search = reactive({
  category: "",
  country: "",
  adress: "",
});
const countryModal = ref(null);
const categoryModal = ref(null);
const { getAllCountries, countries } = useCountry();
const openCountry = ref(false);
const loading = ref(false);
onMounted(async function () {
  loading.value = true;
  await getAllCountries();
  await getAllCategories();
  if (props.data) {
    search.adress = props.data.adress;
    search.category = props.data.category;
    search.country = countries.value.filter(
      (country) => country.id == props.data.country
    )[0];
  } else {
    search.country = localStorage.country
      ? JSON.parse(localStorage.country)
      : null;
  }
  loading.value = false;
});

const selectedSubCategory = async (subCategory) => {
  search.category = subCategory == "" ? "" : subCategory.id;
  selectCategory.subCategory = subCategory;
  showCategory.modal = false;
  returnCategory();
};

async function selectCountry(country) {
  localStorage.country = JSON.stringify(country);
  search.country = country;
  openCountry.value = false;
}

onClickOutside(countryModal, () => {
  openCountry.value = false;
});
onClickOutside(categoryModal, () => {
  showCategory.modal = false;
});
</script>

<template>
  <!-- Mobile Modal -->
  <div
    v-if="showCategory.modal"
    class="fixed top-0 z-50 flex h-full w-full items-center bg-black/25 px-8 xl:hidden"
  >
    <div ref="categoryModal" class="h-4/5 w-full rounded-md bg-white">
      <div class="overflow-y-auto p-2" v-show="showCategory.category">
        <button
          @click="selectedSubCategory('all')"
          type="button"
          :class="[
            selectCategory.subCategory == 'all'
              ? 'block w-full whitespace-nowrap rounded bg-adna-green/25 p-2 text-left text-sm font-bold text-adna-green hover:bg-adna-green hover:text-white'
              : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-adna-green hover:font-bold hover:text-white',
          ]"
        >
          Toutes Catégories
        </button>
        <button
          type="button"
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory(category)"
          :class="[
            selectCategory.subCategory != 'all' &&
            selectCategory.category != null &&
            selectCategory.category.id == category.id
              ? 'group flex w-full justify-between rounded bg-adna-green/25 p-2 text-left text-sm font-bold text-adna-green hover:bg-adna-green hover:text-white'
              : ' group flex w-full justify-between rounded p-2 text-left text-sm hover:bg-adna-green hover:text-white',
          ]"
        >
          <span>{{ category.name }}</span>
          <span
            ><ChevronRightIcon class="h-5 w-5 stroke-adna-green text-white"
          /></span>
        </button>
      </div>
      <div class="overflow-y-auto p-2" v-show="showCategory.subCategory">
        <button
          type="button"
          @click="returnCategory()"
          class="mb-4 block w-auto rounded bg-adna-green p-2 text-white"
        >
          <ArrowLeftIcon class="h-5 w-5" />
        </button>
        <button
          v-if="selectCategory.category"
          @click="selectedSubCategory(selectCategory.category)"
          type="button"
          :class="[
            selectCategory.subCategory.id == selectCategory.category.id
              ? 'block w-full whitespace-nowrap rounded bg-adna-green/25 p-2 text-left text-sm font-bold text-adna-green hover:bg-adna-green hover:text-white'
              : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-adna-green hover:font-bold hover:text-white',
          ]"
        >
          {{ selectCategory.category.name }}
        </button>
        <button
          v-if="
            selectCategory.category &&
            selectCategory.category.children.length != 0
          "
          v-for="subCategory in selectCategory.category.children"
          @click="selectedSubCategory(subCategory)"
          :key="subCategory.id"
          type="button"
          :class="[
            selectCategory.subCategory.id == subCategory.id
              ? 'block w-full whitespace-nowrap rounded bg-adna-green/25 p-2 text-left text-sm font-bold text-adna-green hover:bg-adna-green hover:text-white'
              : 'block w-full whitespace-nowrap rounded p-2 text-left text-sm hover:bg-adna-green hover:font-bold hover:text-white',
          ]"
        >
          {{ subCategory.name }}
        </button>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center flex-col sm:px-0 px-4">
    <div
      v-if="loading"
      class="bg-gray-500 shadow z-10 flex items-center xl:w-[800px] w-[385px] h-16 rounded-full"
    >
      <div class="w-full h-full bg-white rounded-full animate-pulse"></div>
    </div>
    <div
      v-else
      class="bg-white shadow z-10 flex items-center p-2 sm:px-0 px-3 xl:w-[800px] w-full h-16 rounded-full relative"
    >
      <!-- Desktop Modal -->
      <div
        v-if="showCategory.modal && isDesktop"
        ref="categoryModal"
        class="absolute top-full mt-2 left-0 z-10 hidden h-96 w-full rounded-md bg-white shadow-xl xl:flex"
      >
        <div class="h-full w-1/3 border-r py-4 px-6 text-sm">
          <button
            @click="selectedSubCategory('')"
            type="button"
            :class="[
              selectCategory.subCategory == ''
                ? 'block w-full whitespace-nowrap rounded bg-adna-green/25 p-2 text-left font-bold text-adna-green hover:bg-adna-green hover:text-white'
                : 'block w-full whitespace-nowrap rounded p-2 text-left hover:bg-adna-green hover:font-bold hover:text-white',
            ]"
          >
            Toutes Catégories
          </button>
          <button
            type="button"
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory(category)"
            :class="[
              selectCategory.subCategory != '' &&
              selectCategory.category != null &&
              selectCategory.category.id == category.id
                ? 'group flex w-full justify-between rounded bg-adna-green/25 p-2 text-left font-bold text-adna-green hover:bg-adna-green hover:text-white'
                : ' group flex w-full justify-between rounded p-2 text-left hover:bg-adna-green hover:text-white',
            ]"
          >
            <span>{{ category.name }}</span>
            <span
              ><ChevronRightIcon
                class="hidden h-5 w-5 stroke-white text-white group-hover:block"
            /></span>
          </button>
        </div>
        <div class="h-full w-2/3 overflow-y-auto py-4 px-2 text-sm">
          <button
            v-if="selectCategory.category"
            @click="selectedSubCategory(selectCategory.category)"
            type="button"
            :class="[
              selectCategory.subCategory.id == selectCategory.category.id
                ? 'block w-1/2 whitespace-nowrap rounded bg-adna-green/25 p-2 text-left font-bold text-adna-green hover:bg-adna-green hover:text-white'
                : 'block w-1/2 whitespace-nowrap rounded p-2 text-left hover:bg-adna-green hover:font-bold hover:text-white',
            ]"
          >
            {{ selectCategory.category.name }}
          </button>
          <button
            v-if="
              selectCategory.category &&
              selectCategory.category.children.length != 0
            "
            v-for="subCategory in selectCategory.category.children"
            @click="selectedSubCategory(subCategory)"
            :key="subCategory.id"
            type="button"
            :class="[
              selectCategory.subCategory.id == subCategory.id
                ? 'block w-1/2 whitespace-nowrap rounded  bg-adna-green/25 p-2 text-left font-bold text-adna-green hover:bg-adna-green hover:text-white'
                : 'block w-1/2 whitespace-nowrap rounded p-2 text-left hover:bg-adna-green hover:font-bold hover:text-white',
            ]"
          >
            {{ subCategory.name }}
          </button>
        </div>
      </div>

      <div
        class="xl:w-[250px] w-1/3 h-full sm:pr-2 sm:pl-3.5 px-1 rounded-l-full border-r"
      >
        <h6 class="text-xs">Catégorie</h6>
        <div class="">
          <div
            @click="showCategory.modal = !showCategory.modal"
            class="flex w-full cursor-pointer items-center justify-between overflow-x-hidden mt-2 text-xs xl:text-sm"
          >
            <div
              class="w-full whitespace-nowrap pl-2 text-gray-500 text-xs xl:text-sm"
            >
              <span v-if="search.category == ''"> Toutes Catégories </span>
              <span v-else-if="selectCategory.subCategory">
                {{ selectCategory.subCategory.name }}
              </span>
            </div>
            <div>
              <ChevronDownIcon class="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-[250px] w-1/3 h-full px-1 sm:px-2 border-r">
        <h6 class="text-xs">Pays</h6>
        <div
          @click="openCountry = !openCountry"
          class="flex cursor-pointer items-center justify-between mt-2"
        >
          <div
            v-if="search.country"
            class="flex items-center justify-start space-x-2"
          >
            <img
              :src="search.country.image"
              class="sm:h-4 h-3 w-4 sm:w-6"
              alt=""
            />
            <h6 class="text-gray-500 text-xs xl:text-sm overflow-hidden">
              {{ search.country.name }}
            </h6>
          </div>
          <ChevronDownIcon class="h- w-4 text-gray-700" />
        </div>
        <div
          ref="countryModal"
          v-show="openCountry"
          class="xl:h-56 xl:w-full w-1/2 h-40 xl:mt-4 mt-5 shadow absolute xl:relative bg-white overflow-x-hidden overflow-y-auto rounded z-10"
        >
          <div
            v-for="country in countries"
            :key="country.id"
            @click="selectCountry(country)"
            class="flex items-center hover:bg-adna-green text-gray-700 hover:text-white cursor-pointer p-2 justify-start space-x-2"
          >
            <img :src="country.image" class="sm:h-4 h-3 w-4 sm:w-6" alt="" />
            <h6 class="text-xs xl:text-sm overflow-hidden">
              {{ country.name }}
            </h6>
          </div>
        </div>
      </div>
      <div class="xl:w-[250px] w-1/3 h-full px-1 sm:px-2">
        <h6 class="text-xs">Adresse</h6>
        <input
          type="text"
          v-model="search.adress"
          class="border-none focus:border-none focus:outline-none bg-transparent w-full text-xs xl:text-sm focus:ring-0 text-gray-500"
          placeholder="Douala Bonamoussadi"
        />
      </div>
      <router-link
        :to="{
          name: 'search',
          query: {
            category: search.category,
            country: search.country.id,
            adress: search.adress,
          },
        }"
        class="xl:w-12 rounded-full h-full group bg-adna-brown text-white hidden xl:flex justify-center items-center"
      >
        <ArrowRightIcon class="h-8 w-8 group-hover:ml-2 transition-all" />
      </router-link>
    </div>
    <router-link
      :to="{
        name: 'search',
        query: {
          category: search.category,
          country: search.country.id,
          adress: search.adress,
        },
      }"
      class="rounded-full w-1/3 py-3 group space-x-2 bg-adna-brown text-white mt-2 flex xl:hidden justify-center items-center"
      ><span class="text-xs">Rechecher</span>
      <ArrowRightIcon
        class="xl:h-8 h-4 w-4 xl:w-8 group-hover:ml-2 transition-all"
      />
    </router-link>
  </div>
</template>
