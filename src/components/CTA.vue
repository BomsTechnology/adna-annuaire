<script setup>
import bgImage from "@/assets/images/cta.png";
import cameroonImage from "@/assets/images/cameroon.png";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
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
    <div class="bg-white flex items-center p-2 w-[800px] h-16 rounded-full">
      <div class="w-[250px] h-full py-1 px-2 rounded-l-full border-r">
        <h6 class="text-xs">Activité</h6>
        <input
          type="text"
          name=""
          placeholder="Hôtels, Restaurants..."
          class="border-none focus:border-none focus:outline-none focus:ring-0 text-gray-500"
          id=""
        />
      </div>
      <div class="w-[250px] h-full py-1 px-2 border-r">
        <h6 class="text-xs">Pays</h6>
        <div class="flex items-center justify-between mt-0.5">
          <div class="flex items-center justify-start space-x-2">
            <img :src="cameroonImage" class="h-4 w-6" alt="" />
            <h6 class="text-gray-500">Cameroun</h6>
          </div>
          <ChevronDownIcon class="h- w-4 text-gray-700" />
        </div>
      </div>
      <div class="w-[250px] h-full py-1 px-2">
        <h6 class="text-xs">Adresse</h6>
        <input
          type="text"
          name=""
          class="border-none focus:border-none focus:outline-none focus:ring-0 text-gray-500"
          placeholder="Douala Bonamoussadi"
          id=""
        />
      </div>
      <button
        type="button"
        class="w-12 rounded-full h-full group bg-adna-brown text-white flex justify-center items-center"
      >
        <ArrowRightIcon class="h-8 w-8 group-hover:ml-2 transition-all" />
      </button>
    </div>
  </section>
</template>
