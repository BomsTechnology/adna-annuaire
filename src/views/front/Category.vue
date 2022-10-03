<script setup>
import ellipseImage from "@/assets/images/ellipse.png";
import SearchSection from "@/components/SearchSection.vue";
import { ListBulletIcon, MapIcon } from "@heroicons/vue/24/outline";
import Company from "@/components/Company.vue";
</script>
<template>
  <div
    class="bg-gray-100 h-52 w-full flex justify-center items-center overflow-hidden relative"
  >
    <img :src="ellipseImage" alt="" class="z-0 absolute top-32 -left-10" />
    <div><h1 class="font-bold text-3xl lg:text-5xl">Education</h1></div>
    <img :src="ellipseImage" alt="" class="z-0 absolute bottom-28 -right-60" />
  </div>
  <section class="py-8 lg:px-20 px-6">
    <p class="text-gray-500 mb-4 text-xs lg:text-lg">
      <span class="underline">Education</span> >
      <span class="underline">Formations professionnelles</span>
    </p>
    <h1 class="text-2xl font-bold">ONG Internationales, Cameroun</h1>
    <h6 class="text-xs lg:text-lg">18 résultats</h6>
    <div class="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 py-8">
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Ecoles et Universites</a
      >
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Colleges et Lycees</a
      >
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Formations professionnelles</a
      >
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Centres de recherches</a
      >
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Formations à distance</a
      >
      <a href="#" class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >Centres de documentation</a
      >
    </div>
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
    <div class="py-10">
      <Company />
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
</template>
