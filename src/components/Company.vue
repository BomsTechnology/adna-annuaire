<script setup>
import { CameraIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    class="shadow-lg lg:w-[600px] w-full lg:h-40 rounded-lg flex lg:items-center items-start lg:flex-row flex-col space-x-4 bg-white border p-3"
  >
    <div
      class="lg:h-full lg:w-40 w-full h-36 bg-gray-100 flex justify-center items-center"
    >
      <CameraIcon class="h-10 w-10" />
    </div>
    <div class="h-full space-y-2 lg:py-0 py-3">
      <h1 class="font-bold text-xl">ABI FALL LIVELIHOOD</h1>
      <div class="flex items-center space-x-2 text-sm">
        <MapPinIcon class="h-5 w-5 text-adna-green" />
        <span>BP. 560 - BUEA</span>
      </div>
      <div class="flex items-center space-x-2 text-sm">
        <PhoneIcon class="h-5 w-5 text-adna-green" />
        <span>(+237) 674 54 00 66</span>
      </div>
      <div class="flex items-center space-x-2 text-sm">
        <EnvelopeIcon class="h-5 w-5 text-adna-green" />
        <span>info@abifall.com</span>
      </div>
    </div>
  </div>
</template>
