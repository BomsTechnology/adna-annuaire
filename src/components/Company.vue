<script setup>
import { CameraIcon } from "@heroicons/vue/24/outline";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/solid";
const props = defineProps({
  data: Object,
});
</script>

<template>
  <div>
    <router-link
      :to="{
        name: 'company',
        params: {
          slug: data.slug,
        },
      }"
      class="shadow-lg lg:w-[600px] w-full lg:h-40 rounded-lg flex lg:items-center items-start lg:flex-row flex-col space-x-4 bg-white border p-3"
    >
      <div
        class="lg:h-full lg:w-40 w-full h-36 bg-gray-100 overflow-hidden flex justify-center items-center"
      >
        <img
          :src="data.avatar"
          v-if="data.avatar"
          class="object-cover h-full w-full"
          alt=""
        />
        <BuildingOffice2Icon v-else class="h-10 w-10" />
      </div>
      <div class="h-full space-y-2 lg:py-0 py-3">
        <h1 class="font-bold text-xl uppercase">{{ data.name }}</h1>
        <div class="flex items-center space-x-2 text-sm">
          <MapPinIcon class="h-5 w-5 text-adna-green" />
          <span>{{ data.location }}</span>
        </div>
        <div class="flex items-center space-x-2 text-sm">
          <PhoneIcon class="h-5 w-5 text-adna-green" />
          <span>{{ data.phone }}</span>
        </div>
        <div class="flex items-center space-x-2 text-sm">
          <EnvelopeIcon class="h-5 w-5 text-adna-green" />
          <span>{{ data.email }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
