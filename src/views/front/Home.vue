<script setup>
import CTA from "@/components/home/CTA.vue";
import Spotlight from "@/components/home/Spotlight.vue";
import Ads from "@/components/home/Ads.vue";
import SubCategory from "@/components/home/SubCategory.vue";
import Start from "@/components/home/Start.vue";
import FirstAds from "@/components/home/FirstAds.vue";
</script>
<template>
  <CTA />
  <Spotlight />
  <Ads />
  <SubCategory />
  <Start />
  <SubCategory :toRight="false" />
  <FirstAds />
</template>
