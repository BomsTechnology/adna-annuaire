<script setup>
import { CameraIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="animate-pulse">
    <div
      class="shadow-lg lg:w-[600px] w-full lg:h-40 rounded-lg flex lg:items-center items-start lg:flex-row flex-col space-x-4 bg-gray-100 border p-3"
    >
      <div
        class="lg:h-full lg:w-40 w-full h-36 bg-gray-200 flex justify-center items-center"
      >
        <CameraIcon class="h-10 w-10" />
      </div>
      <div class="h-full space-y-2 lg:py-0 py-3 flex flex-col justify-center">
        <div class="mb-4 h-2.5 w-80 rounded-full bg-gray-200"></div>
        <div class="mb-4 h-2.5 w-80 rounded-full bg-gray-200"></div>
        <div class="mb-4 h-2.5 w-80 rounded-full bg-gray-200"></div>
        <div class="mb-4 h-2.5 w-80 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
</template>
