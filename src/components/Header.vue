<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
  <header>
    <div class="px-16 py-6 flex justify-between items-center border-b">
      <div>
        <h1 class="text-3xl uppercase font-bold">Adnafrica</h1>
      </div>
      <div class="flex items-center justify-center space-x-3 text-sm">
        <a href="#" class="px-3 py-1 text-white rounded-lg bg-adna-green"
          >Annuaire</a
        >
        <a href="#">Annonce</a>
      </div>
      <div>
        <button
          type="button"
          class="bg-adna-green text-white py-2 px-3 rounded-lg"
        >
          Rejoindre l'annuaire
        </button>
      </div>
    </div>
    <Navbar />
  </header>
</template>
