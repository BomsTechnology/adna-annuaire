<script setup>
import { LockClosedIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="mt-6">
    <div class="flex items-center space-x-3">
      <div class="p-3 bg-adna-yellow rounded-full">
        <LockClosedIcon class="h-10 w-10 text-adna-brown" />
      </div>
      <div>
        <h2 class="font-medium text-xl">Definissez un code d’acces</h2>
        <h3>Veuillez indiquer un mot de passe pour acceder à votre compte.</h3>
      </div>
    </div>
    <div class="mt-5">
      <input
        type="text"
        name=""
        id=""
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-adna-green focus:ring focus:ring-adna-green focus:ring-opacity-50"
      />
    </div>
  </div>
</template>
