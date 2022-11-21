<script setup>
import ellipseImage from "@/assets/images/ellipse.png";
import { ListBulletIcon, MapIcon } from "@heroicons/vue/24/outline";
import  Loader from "@/components/skeleton/Company.vue";
import Company from "@/components/Company.vue";
import useCategory from "@/composables/useCategory";
import useCompany from "@/composables/useCompany";
import { ref, onMounted, watch } from "vue";
const { category, getCategory } = useCategory();
const { companies,
    getByCategory, loading, errors } = useCompany();

const props = defineProps({
  slug: {
    required: true,
    type: String,
  },
  subCategory: {
    required: false,
    type: String,
  },
});

onMounted(async function () {
  if(props.subCategory){
    await getCategory(props.subCategory);
  }else{
    await getCategory(props.slug);
  };
  await getByCategory(category.value.id);
});

watch(props, async function (newProps, oldProps) {
  if(newProps.subCategory)
    { await getCategory(newProps.subCategory);}else
   {  await getCategory(newProps.slug);}
    await getByCategory(category.value.id);
});
</script>
<template>
  <div>
  <div
    class="bg-gray-100 h-52 w-full flex justify-center items-center overflow-hidden relative"
  >
    <img :src="ellipseImage" alt="" class="z-0 absolute top-32 -left-10" />
    <div>
      <h1 class="font-bold text-3xl lg:text-5xl">{{ category.name }}</h1>
    </div>
    <img :src="ellipseImage" alt="" class="z-0 absolute bottom-28 -right-60" />
  </div>
  <section class="py-8 lg:px-20 px-6">
    <p
      class="text-gray-500 mb-4 text-xs lg:text-lg flex space-x-2"
      v-if="props.subCategory"
    >
      <router-link
      v-if="category.parent_detail"
        :to="{
          name: 'category',hash: '#view',
          params: {
            slug: category.parent_detail.slug,
          },
        }"
        class="hover:underline inline"
        >{{
         category.parent_detail.name
        }}</router-link
      >
      <div>></div>
      <router-link
      v-if="category.parent_detail"
        :to="{
          name: 'category',hash: '#view',
          params: {
            slug: category.parent_detail.slug,
            subCategory: category.slug,
          },
        }"
        class="hover:underline"
      >
        {{ category.name }}</router-link
      >
    </p>
    <div id="view">
    <h1 class="text-2xl font-bold">{{ category.name }}</h1>
    <h6 class="text-xs lg:text-lg">
      {{ category.nb_ads }} <span v-if="category.nb_ads == 1">résultat</span>
      <span v-else>résultats</span>
    </h6>
    <h3 v-if="!props.subCategory" class="mt-4 text-sm">Sous Catégories:</h3>
    <div
      v-if="!props.subCategory"
      class="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 py-4"
    >
      <router-link
        :to="{
          name: 'category',hash: '#view',
          params: {
            slug: category.slug,
            subCategory: subCategory.slug,
          },
        }"
        v-for="subCategory in category.children"
        class="text-sm lg:text-lg bg-gray-100 px-4 py-2 rounded-xl"
        >{{ subCategory.name }}</router-link
      >
    </div>
    <div class="mt-4 flex items-center space-x-2">
      <button
        class="flex items-center space-x-2 px-3 py-1 bg-adna-yellow text-adna-brown rounded-full"
        type="button"
      >
        <span>Liste</span>
        <ListBulletIcon class="h-5 w-5" />
      </button>
      <button
        class="flex items-center space-x-2 px-3 py-1 text-adna-brown rounded-full"
        type="button"
      >
        <span>Carte</span>
        <MapIcon class="h-5 w-5" />
      </button>
    </div>
    <div class="py-10 space-y-3" >
      <Loader v-if="loading" />
      <Company v-else-if="companies.length != 0" v-for="company in companies" :key="company.id" :data="company"/>
      <div v-else>
        <h1>AUCUN RESULTAT</h1>
      </div>
    </div>
    </div>
    <div class="w-full flex justify-center items-center space-x-2">
      <button
        type="button"
        class="bg-adna-yellow text-adna-brown rounded-full px-4 text-center text-sm lg:text-lg py-1.5"
      >
        1
      </button>
      <button
        type="button"
        class="text-adna-brown rounded-full px-4 text-center text-sm lg:text-lg py-1.5"
      >
        2
      </button>
    </div>
  </section>
  </div>
</template>
