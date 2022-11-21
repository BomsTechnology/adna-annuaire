<script setup>
import {
  HomeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";
import useCategory from "@/composables/useCategory";
import Loader from "@/components/skeleton/NavBar.vue";
import {
  onClickOutside,
  breakpointsTailwind,
  useBreakpoints,
} from "@vueuse/core";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  openMenu: Boolean,
});
const emits = defineEmits([close]);
const router = useRouter();
const breakPoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakPoints.greater("xl");
const { categories, getAllCategories, loading, errors } = useCategory();
const nav = ref(null);

async function hideMenu() {
  emits("close");
}

const categorySelected = ref(null);
const showCategories = ref(true);

async function selectCategory(category) {
  if (categorySelected.value && categorySelected.value.id == category.id) {
    unSelectCategory();
  } else {
    categorySelected.value = category;
  }
}

async function unSelectCategory() {
  categorySelected.value = null;
}

async function scrollLeft() {
  nav.value.scrollLeft -= 100;
}
async function scrollRight() {
  nav.value.scrollLeft += 100;
}

async function goTo(category, subCategory) {
  hideMenu();
  router.push({
    name: "category",
    params: {
      slug: category,
      subCategory: subCategory,
    },
  });
}

onMounted(async function () {
  await getAllCategories();
});
</script>
<template>
  <div>
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0 translate-x-full absolute"
      enter-to-class="opacity-1 translate-x-0"
      leave-active-class="transition duration-500"
      leave-from-class="opacity-1/2 translate-x-0"
      leave-to-class="translate-x-1/2 opacity-0 "
    >
      <div
        v-if="openMenu"
        class="h-screen fixed bg-black/50 w-full overflow-y-auto z-30 top-0 flex justify-between items-start"
      >
        <button
          @click="hideMenu"
          type="button"
          class="text-white focus:text-adna-green hover:text-adna-green mt-2 ml-2 focus:outline-none"
          aria-label="toggle menu"
        >
          <XMarkIcon class="h-8 w-8 fill-current" />
        </button>
        <div
          class="sm:w-1/2 w-3/4 bg-white h-full p-3 overflow-y-auto flex flex-col"
        >
          <router-link
            :to="{ name: 'register' }"
            class="bg-adna-green inline-block text-center text-white md:text-[16px] text-xs px-4 py-3 rounded-lg"
          >
            Rejoindre l'annuaire
          </router-link>
          <router-link
            :to="{ name: 'register' }"
            class="text-adna-green md:text-[16px] my-3 text-center inline-block text-xs py-2 px-3 rounded-lg"
          >
            Se Connecter
          </router-link>
          <hr />
          <button
            type="button"
            @click="showCategories = !showCategories"
            class="text-xs md:text-[16px] font-bold flex items-center justify-between px-3 py-2 mt-3"
          >
            <span>Parcourir les catégories</span>
            <ChevronUpIcon v-if="showCategories" class="h-4 w-4" />
            <ChevronDownIcon v-else class="h-4 w-4" />
          </button>
          <Transition
            enter-active-class="transition duration-500"
            enter-from-class="opacity-0 -translate-y-full absolute"
            enter-to-class="opacity-1 translate-y-0"
            leave-active-class="transition duration-500"
            leave-from-class="opacity-1/2 translate-y-0"
            leave-to-class="-translate-y-1/2 opacity-0 "
          >
            <div v-if="showCategories" class="pl-4">
              <div v-for="category in categories" :key="category.id">
                <button
                  type="button"
                  @click="selectCategory(category)"
                  class="text-xs md:text-[16px] font-medium w-full flex items-center justify-between px-3 py-2 mt-3"
                >
                  <div class="flex space-x-1 items-center">
                    <span v-html="category.icon"></span>

                    <span>{{ category.name }}</span>
                  </div>
                  <ChevronUpIcon
                    v-if="
                      category.children.length != 0 &&
                      categorySelected &&
                      categorySelected.id == category.id
                    "
                    class="h-4 w-4"
                  />
                  <ChevronDownIcon v-else class="h-4 w-4" />
                </button>
                <Transition
                  enter-active-class="transition duration-500"
                  enter-from-class="opacity-0 -translate-y-full absolute"
                  enter-to-class="opacity-1 translate-y-0"
                  leave-active-class="transition duration-500"
                  leave-from-class="opacity-1/2"
                  leave-to-class=" opacity-0 "
                >
                  <div
                    v-if="
                      category.children.length != 0 &&
                      categorySelected &&
                      categorySelected.id == category.id
                    "
                    class="pl-8 mt-2 text-gray-500"
                  >
                    <button
                      type="button"
                      @click="goTo(category.slug, subCategory.slug)"
                      v-for="(subCategory, index) in category.children"
                      :key="subCategory.id"
                      class="md:text-[16px] text-xs block py-2"
                    >
                      <span> {{ subCategory.name }}</span>
                    </button>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
    <div
      class="flex xl:hidden items-center justify-center w-full py-4 space-x-3 text-xs"
    >
      <a href="#" class="px-3 py-1 text-white rounded-lg bg-adna-green"
        >Annuaire</a
      >
      <a href="#">Annonce</a>
    </div>
    <div class="relative w-full z-20 border-t">
      <button
        type="button"
        @click="scrollLeft()"
        class="bg-adna-green rounded-full p-1 text-white absolute bottom-5 xl:hidden z-30 left-2"
      >
        <ChevronLeftIcon class="h-3 w-3" />
      </button>
      <button
        type="button"
        @click="scrollRight()"
        class="bg-adna-green rounded-full p-1 text-white absolute bottom-5 xl:hidden z-30 right-2"
      >
        <ChevronRightIcon class="h-3 w-3" />
      </button>
      <Loader v-if="loading" />
      <nav
        v-else
        ref="nav"
        class="flex scroll-smooth bg-white justify-start xl:justify-center xl:overflow-visible overflow-x-auto no-scrollbar items-center space-x-8 px-8 lg:px-16"
      >
        <!-- <router-link
        :to="{ name: 'home' }"
        class="text-xs lg:text-sm group hover:text-adna-green py-4 flex flex-col justify-center items-center"
      >
        <HomeIcon class="lg:h-6 h-4 lg:w-6 w-4 group-hover:text-adna-green" />
        <span>Accueil</span>
      </router-link> -->
        <div
          @mouseenter="selectCategory(category)"
          @mouseleave="unSelectCategory"
          v-for="category in categories"
          :key="category.id"
          class="relative py-4"
        >
          <router-link
            :to="{
              name: 'category',
              params: {
                slug: category.slug,
              },
            }"
            class="text-xs lg:text-sm group hover:text-adna-green flex flex-col text-center justify-center items-center"
          >
            <span v-html="category.icon"></span>

            <span>{{ category.name }}</span>
          </router-link>
          <div
            v-if="
              isDesktop &&
              category.children.length != 0 &&
              categorySelected &&
              categorySelected.id == category.id
            "
            :style="[
              category.children.length > 24
                ? 'grid-template-columns: max-content max-content max-content'
                : 'grid-template-columns: max-content max-content',
            ]"
            class="text-sm min-w-full left-0 p-4 grid gap-2 auto-cols-max top-full shadow absolute bg-white border-t-4 border-adna-green"
          >
            <router-link
              v-for="(subCategory, index) in category.children"
              :key="subCategory.id"
              :to="{
                name: 'category',
                params: {
                  slug: category.slug,
                  subCategory: subCategory.slug,
                },
              }"
              :class="[
                index % 2 != 0
                  ? 'hover:text-adna-green font-medium'
                  : 'hover:text-adna-green font-medium mr-20',
              ]"
            >
              <span> {{ subCategory.name }}</span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
