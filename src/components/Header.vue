<script setup>
import Navbar from "./Navbar.vue";
import CountryModal from "@/components/home/CountryModal.vue";
import { ref, onMounted } from "vue";
import { Bars4Icon, XMarkIcon } from "@heroicons/vue/24/solid";

const openCountryModel = ref(false);
const openMenu = ref(false);
onMounted(async function () {
  if (!localStorage.country) {
    openCountryModel.value = true;
  }
});

const isScroll = ref(false);
document.addEventListener("scroll", async function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;
  if (bodyTopPosition < -150) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});
</script>

<template>
  <div>
    <CountryModal v-if="openCountryModel" />
    <header class="bg-white">
      <div
        :class="[
          isScroll
            ? 'md:px-16 px-4 py-4 shadow flex justify-between items-center fixed z-30  bg-white w-full'
            : 'md:px-16 px-4 py-6 flex justify-between items-center',
        ]"
      >
        <div>
          <router-link
            :to="{ name: 'home' }"
            class="md:text-3xl text-xl uppercase font-bold"
            >Adnafrica</router-link
          >
        </div>
        <!-- <div
          class="xl:flex hidden items-center justify-center space-x-3 text-sm"
        >
          <a href="#" class="px-3 py-1 text-white rounded-lg bg-adna-green"
            >Annuaire</a
          >
          <a href="#">Annonce</a>
        </div> -->
        <div>
          <div class="xl:flex hidden">
            <router-link
              :to="{ name: 'register' }"
              class="bg-adna-green text-white md:text-[16px] text-xs py-2 px-3 rounded-lg"
            >
              Rejoindre l'annuaire
            </router-link>
            <router-link
              :to="{ name: 'register' }"
              class="text-adna-green md:text-[16px] text-xs py-2 px-3 rounded-lg"
            >
              Se Connecter
            </router-link>
          </div>

          <button
            type="button"
            @click="openMenu = !openMenu"
            class="hover:text-gray-600 xl:hidden block focus:text-gray-600 focus:outline-none"
            aria-label="toggle menu"
          >
            <Bars4Icon class="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
      <Navbar :openMenu="openMenu" @close="openMenu = false" />
    </header>
  </div>
</template>
