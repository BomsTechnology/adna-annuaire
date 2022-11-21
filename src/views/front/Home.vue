<script setup>
import CTA from "@/components/home/CTA.vue";
import Spotlight from "@/components/home/Spotlight.vue";
import Ads from "@/components/home/Ads.vue";
import SubCategory from "@/components/home/SubCategory.vue";
import Start from "@/components/home/Start.vue";
import FirstAds from "@/components/home/FirstAds.vue";
import useCategory from "@/composables/useCategory";
import { onMounted } from "vue";
import useCountry from "@/composables/useCountry";

const { getAllCountries, countries } = useCountry();
const { getTopCategories, categories } = useCategory();

onMounted(async function () {
  await getTopCategories();
});
</script>
<template>
  <CTA />
  <Spotlight />
  <Ads />
  <SubCategory :data="categories[0]" />
  <Start />
  <SubCategory :toRight="false" :data="categories[1]" />
  <FirstAds />
</template>
