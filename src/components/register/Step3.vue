<script setup>
import { EnvelopeOpenIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="mt-6">
    <div class="flex items-center space-x-3">
      <div class="p-3 bg-adna-yellow rounded-full">
        <EnvelopeOpenIcon class="h-10 w-10 text-adna-brown" />
      </div>
      <div>
        <h2 class="font-medium text-xl">Entrez le code de vérification</h2>
        <h3>
          Un code à quatre chiffres a été envoyé à l’adresse
          <span class="font-medium">das****@gmail.com</span>.
        </h3>
      </div>
    </div>
    <div class="mt-5 flex items-center space-x-4 justify-start ml-20">
      <input
        type="text"
        name=""
        id=""
        class="mt-1 block w-12 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-adna-green focus:ring focus:ring-adna-green focus:ring-opacity-50"
      />
      <input
        type="text"
        name=""
        id=""
        class="mt-1 block w-12 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-adna-green focus:ring focus:ring-adna-green focus:ring-opacity-50"
      />
      <input
        type="text"
        name=""
        id=""
        class="mt-1 block w-12 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-adna-green focus:ring focus:ring-adna-green focus:ring-opacity-50"
      />
      <input
        type="text"
        name=""
        id=""
        class="mt-1 block w-12 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-adna-green focus:ring focus:ring-adna-green focus:ring-opacity-50"
      />
    </div>
  </div>
</template>
