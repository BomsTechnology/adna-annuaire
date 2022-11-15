<script setup>
import {
  HomeIcon,
  AcademicCapIcon,
  // TruckIcon,
  // BuildingOffice2Icon,
  // BanknotesIcon,
  // LightBulbIcon,
  // BuildingStorefrontIcon,
  // UserGroupIcon,
  // BuildingLibraryIcon,
  // ScaleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import useCategory from "@/composables/useCategory";
import { ref, onMounted } from "vue";
const { categories, getAllCategories, loading, errors } = useCategory();
const nav = ref(null);
const isScroll = ref(false);
document.addEventListener("scroll", async function () {
  let bodyTopPosition = document.body.getBoundingClientRect().top;
  if (bodyTopPosition < -150) {
    isScroll.value = true;
  } else {
    isScroll.value = false;
  }
});

async function scrollLeft() {
  nav.value.scrollLeft -= 100;
}
async function scrollRight() {
  nav.value.scrollLeft += 100;
}

onMounted(async function () {
  await getAllCategories();
});
</script>
<template>
  <div
    class="flex md:hidden items-center justify-center w-full py-4 space-x-3 text-xs"
  >
    <a href="#" class="px-3 py-1 text-white rounded-lg bg-adna-green"
      >Annuaire</a
    >
    <a href="#">Annonce</a>
  </div>
  <div class="relative w-full z-40 border-t">
    <button
      type="button"
      @click="scrollLeft()"
      class="bg-adna-green rounded-full p-1 text-white absolute bottom-10 z-30 left-2"
    >
      <ChevronLeftIcon class="h-3 w-3" />
    </button>
    <button
      type="button"
      @click="scrollRight()"
      class="bg-adna-green rounded-full p-1 text-white absolute bottom-10 z-30 right-2"
    >
      <ChevronRightIcon class="h-3 w-3" />
    </button>
    <nav
      ref="nav"
      :class="[
        isScroll
          ? 'flex scroll-smooth fixed  shadow w-full bg-gray-50 top-0 justify-start lg:justify-center items-center no-scrollbar overflow-x-auto space-x-8 py-6 px-8 lg:px-16'
          : 'flex scroll-smooth bg-white justify-start lg:justify-center items-center no-scrollbar overflow-x-auto space-x-8 py-6 px-8 lg:px-16',
      ]"
    >
      <router-link
        :to="{ name: 'home' }"
        class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
      >
        <HomeIcon class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green" />
        <span>Accueil</span>
      </router-link>
      <router-link
        :to="{
          name: 'category',
          params: {
            slug: category.slug,
          },
        }"
        v-for="category in categories"
        :key="category.id"
        class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
      >
        <span v-html="category.icon"></span>

        <span>{{ category.name }}</span>
      </router-link>
    </nav>
  </div>
</template>
