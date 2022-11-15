<script setup>
import cameroonImage from "@/assets/images/cameroon.png";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex justify-center items-center flex-col sm:px-0 px-4">
    <div
      class="bg-white shadow z-10 flex items-center p-2 sm:px-0 px-3 md:w-[800px] w-full h-16 rounded-full"
    >
      <div
        class="lg:w-[250px] w-1/3 h-full sm:pr-2 sm:pl-3.5 px-1 rounded-l-full border-r"
      >
        <h6 class="text-xs">Activité</h6>
        <input
          type="text"
          name=""
          placeholder="Hôtels, Restaurants..."
          class="border-none focus:border-none focus:outline-none w-full bg-transparent text-xs lg:text-sm focus:ring-0 text-gray-500"
          id=""
        />
      </div>
      <div class="lg:w-[250px] w-1/3 h-full py-1 px-1 sm:px-2 border-r">
        <h6 class="text-xs">Pays</h6>
        <div class="flex items-center justify-between mt-1 sm:mt-0.5">
          <div class="flex items-center justify-start space-x-2">
            <img :src="cameroonImage" class="sm:h-4 h-3 w-4 sm:w-6" alt="" />
            <h6 class="text-gray-500 text-xs lg:text-sm overflow-hidden">
              Cameroun
            </h6>
          </div>
          <ChevronDownIcon class="h- w-4 text-gray-700" />
        </div>
      </div>
      <div class="lg:w-[250px] w-1/3 h-full py-1 px-1 sm:px-2">
        <h6 class="text-xs">Adresse</h6>
        <input
          type="text"
          name=""
          class="border-none focus:border-none focus:outline-none bg-transparent w-full text-xs lg:text-sm focus:ring-0 text-gray-500"
          placeholder="Douala Bonamoussadi"
          id=""
        />
      </div>
      <router-link
        :to="{ name: 'search' }"
        class="lg:w-12 rounded-full h-full group bg-adna-brown text-white hidden lg:flex justify-center items-center"
      >
        <ArrowRightIcon class="h-8 w-8 group-hover:ml-2 transition-all" />
      </router-link>
    </div>
    <router-link
      :to="{ name: 'search' }"
      class="rounded-full w-1/3 py-3 group space-x-2 bg-adna-brown text-white mt-2 flex lg:hidden z-10 justify-center items-center"
      ><span class="text-xs">Rechecher</span>
      <ArrowRightIcon
        class="lg:h-8 h-4 w-4 lg:w-8 group-hover:ml-2 transition-all"
      />
    </router-link>
  </div>
</template>
