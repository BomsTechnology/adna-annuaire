<script setup>
import { onMounted, ref } from "vue";
import useCountry from "@/composables/useCountry";
import { GlobeEuropeAfricaIcon } from "@heroicons/vue/24/solid";

const { getAllCountries, countries, loading } = useCountry();
onMounted(async function () {
  await getAllCountries();
});

async function selectCountry(country) {
  localStorage.country = JSON.stringify(country);
  location.href = "/";
}
</script>

<template>
  <div
    class="fixed h-screen w-full z-50 bg-black/75 flex justify-center items-center"
  >
    <div class="lg:h-2/3 h-1/2 lg:w-2/4 w-3/4 bg-white rounded-lg">
      <div
        class="h-1/4 bg-indigo-200 relative p-4 flex justify-center lg:justify-between items-center overflow-hidden rounded-t-lg"
      >
        <h1
          class="font-bold text-xl lg:text-left z-20 text-center lg:text-3xl lg:w-1/2"
        >
          Choisissez votre zone géographique
        </h1>
        <span class="lg:relative absolute">
          <GlobeEuropeAfricaIcon
            class="lg:h-60 w-40 text-adna-green lg:opacity-100 opacity-70 lg:w-60"
          />
        </span>
      </div>
      <div v-if="loading" class="h-3/4 flex justify-center items-center">
        <Spin :color="'text-adna-green'" :width="'w-10'" :height="'h-10'" />
      </div>
      <div
        v-else
        class="h-3/4 p-4 overflow-y-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <button
          type="button"
          @click="selectCountry(country)"
          class="p-2 rounded h-20 w-18 sm:w-32 hover:border inline hover:shadow focus:outline-none hover:border-adna-green"
          v-for="country in countries"
          :key="country.id"
        >
          <img :src="country.image" class="w-full h-full object-cover" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
