<script setup>
import bgImage from "@/assets/images/cta.png";
import cameroonImage from "@/assets/images/cameroon.png";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import SearchSection from "../SearchSection.vue";
</script>
<template>
  <section
    class="h-[500px] bg-cover flex flex-col justify-center items-center space-y-6"
    :style="{ 'background-image': `url(${bgImage})` }"
  >
    <div class="text-center text-white">
      <h1 class="text-3xl font-medium mb-3">Adna Annuaire</h1>
      <p class="text-2xl">
        Retrouvez plus de 15,000 entreprises Africaines de facon organisée
      </p>
    </div>
    <SearchSection />
  </section>
</template>
