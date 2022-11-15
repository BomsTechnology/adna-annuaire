<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <header class="bg-white">
    <div class="md:px-16 px-4 py-6 flex justify-between items-center">
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="md:text-3xl text-xl uppercase font-bold"
          >Adnafrica</router-link
        >
      </div>
      <div class="md:flex hidden items-center justify-center space-x-3 text-sm">
        <a href="#" class="px-3 py-1 text-white rounded-lg bg-adna-green"
          >Annuaire</a
        >
        <a href="#">Annonce</a>
      </div>
      <div>
        <router-link
          :to="{ name: 'register' }"
          class="bg-adna-green text-white md:text-[16px] text-xs py-2 px-3 rounded-lg"
        >
          Rejoindre l'annuaire
        </router-link>
      </div>
    </div>
    <Navbar />
  </header>
</template>
