<script setup>
import restaurantImage from "@/assets/images/restaurant.png";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <section
    class="bg-gray-100 w-full flex items-center justify-center py-6 px-12 relative overflow-hidden"
  >
    <div
      class="lg:w-1/2 flex lg:justify-start justify-center flex-col lg:items-start items-center"
    >
      <h1
        class="lg:text-4xl text-2xl lg:text-left text-center font-semibold text-adna-brown"
      >
        Laissez le monde découvrir le meilleur de vos activités.
      </h1>
      <p class="mt-8 lg:text-xl lg:text-left text-center">
        Enregistrez votre entreprise des maintenant sur ADNA annuaire et
        beneficiez d’une meilleures visibilité en ligne.
      </p>
      <router-link
        :to="{ name: 'register' }"
        class="mt-6 bg-adna-yellow text-adna-brown py-3 px-8 rounded-lg lg:text-xl font-semibold"
      >
        Commencer
      </router-link>
    </div>
    <div class="lg:w-1/2 hidden lg:flex justify-end items-center relative">
      <img :src="restaurantImage" class="h-80 object-cover z-10" alt="" />
      <GlobeAltIcon
        class="h-60 text-adna-yellow opacity-50 absolute z-0 -top-10 -right-10"
      />
    </div>
  </section>
</template>
