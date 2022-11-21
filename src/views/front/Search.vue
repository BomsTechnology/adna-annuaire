<script setup>
import ellipseImage from "@/assets/images/ellipse.png";
import Loader from "@/components/skeleton/Company.vue";
import SearchSection from "@/components/SearchSection.vue";
import { ListBulletIcon, MapIcon } from "@heroicons/vue/24/outline";
import Company from "@/components/Company.vue";
import { onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import useCompany from "@/composables/useCompany";

const { companies, searchCompanies, loading, errors } = useCompany();
const search = reactive({
  category: "",
  country: "",
  adress: "",
});
const route = useRoute();
onMounted(async function () {
  if (route.query.country) {
    search.country = route.query.country;
    search.category = route.query.category;
    search.adress = route.query.adress;
    await searchCompanies({ ...search });
  }
});

watch(route, async function (newRoute, oldRoute) {
  if (newRoute.query.country) {
    search.country = newRoute.query.country;
    search.category = newRoute.query.category;
    search.adress = newRoute.query.adress;
    await searchCompanies({ ...search });
  }
});
</script>
<template>
  <div>
    <div
      class="bg-gray-100 h-52 w-full flex justify-center items-center relative"
    >
      <!-- <img :src="ellipseImage" alt="" class="z-0 absolute top-32 -left-10" /> -->
      <SearchSection :data="search" />
      <!-- <img :src="ellipseImage" alt="" class="z-0 absolute bottom-28 -right-60" /> -->
    </div>
    <section class="py-8 lg:px-20 px-6">
      <div id="view">
        <h6 class="text-xs lg:text-lg">
          {{ companies.length }}
          <span v-if="companies.length == 1">résultat</span>
          <span v-else>résultats</span>
        </h6>

        <div class="mt-4 flex items-center space-x-2">
          <button
            class="flex items-center space-x-2 px-3 py-1 bg-adna-yellow text-adna-brown rounded-full"
            type="button"
          >
            <span>Liste</span>
            <ListBulletIcon class="h-5 w-5" />
          </button>
          <button
            class="flex items-center space-x-2 px-3 py-1 text-adna-brown rounded-full"
            type="button"
          >
            <span>Carte</span>
            <MapIcon class="h-5 w-5" />
          </button>
        </div>
        <div class="py-10 space-y-3">
          <Loader v-if="loading" />
          <Company
            v-else-if="companies.length != 0"
            v-for="company in companies"
            :key="company.id"
            :data="company"
          />
          <div v-else>
            <h1>AUCUN RESULTAT</h1>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center space-x-2">
        <button
          type="button"
          class="bg-adna-yellow text-adna-brown rounded-full px-4 text-center text-sm lg:text-lg py-1.5"
        >
          1
        </button>
        <button
          type="button"
          class="text-adna-brown rounded-full px-4 text-center text-sm lg:text-lg py-1.5"
        >
          2
        </button>
      </div>
    </section>
  </div>
</template>
