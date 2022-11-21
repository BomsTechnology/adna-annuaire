<script setup>
const props = defineProps({
  data: Object,
  toRight: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section
    v-if="data"
    class="flex justify-start items-center lg:space-x-8 py-10 lg:py-20 px-4"
  >
    <div v-if="props.toRight">
      <div
        class="h-96 w-80 rounded-2xl bg-gradient-to-br from-[#B9E3DA] to-adna-green hidden lg:flex justify-center items-center"
      >
        <div class="h-60 w-60 rounded-full bg-[#B9E3DA] overflow-hidden p-4">
          <img :src="data.image" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
    <div class="lg:w-4/5 w-full px-4">
      <div
        class="h-28 w-28 mx-auto lg:hidden mb-8 rounded-full bg-[#B9E3DA] overflow-hidden p-4"
      >
        <img :src="data.image" class="w-full h-full object-cover" alt="" />
      </div>
      <h1
        :class="[
          props.toRight
            ? 'lg:text-4xl text-2xl font-bold text-center lg:text-left'
            : 'lg:text-4xl text-2xl font-bold text-center lg:text-right',
        ]"
      >
        Les sous catégories pour {{ data.name }}
      </h1>
      <div class="grid grid-cols-2 my-10 gap-8">
        <router-link
          :to="{
            name: 'category',
            hash: '#view',
            params: {
              slug: data.slug,
              subCategory: subCategory.slug,
            },
          }"
          v-for="(subCategory, index) in data.children.slice(1, 7)"
          :key="index"
          class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >{{ subCategory.name }}</router-link
        >
      </div>
      <div class="w-full text-center">
        <router-link
          :to="{
            name: 'category',
            params: {
              slug: data.slug,
            },
          }"
          class="hover:underline lg:text-lg text-xs"
          >Tout afficher</router-link
        >
      </div>
    </div>
    <div v-if="!props.toRight">
      <div
        class="h-96 w-80 rounded-2xl bg-gradient-to-br from-[#B9E3DA] to-adna-green hidden lg:flex justify-center items-center"
      >
        <div class="h-60 w-60 rounded-full bg-[#B9E3DA] overflow-hidden p-4">
          <img :src="data.image" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
