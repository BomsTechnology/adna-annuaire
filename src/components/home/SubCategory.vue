<script setup>
import schoolImage from "@/assets/images/school.png";

const props = defineProps({
  toRight: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section
    class="flex justify-start items-center lg:space-x-8 py-10 lg:py-20 px-4"
  >
    <div v-if="props.toRight">
      <div
        class="h-96 w-80 rounded-2xl bg-gradient-to-br from-[#B9E3DA] to-adna-green hidden lg:flex justify-center items-center"
      >
        <div class="h-60 w-60 rounded-full bg-[#B9E3DA] overflow-hidden p-4">
          <img :src="schoolImage" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
    <div class="lg:w-4/5 w-full px-4">
      <div
        class="h-28 w-28 mx-auto lg:hidden mb-8 rounded-full bg-[#B9E3DA] overflow-hidden p-4"
      >
        <img :src="schoolImage" class="w-full h-full object-cover" alt="" />
      </div>
      <h1
        :class="[
          props.toRight
            ? 'lg:text-4xl text-2xl font-bold text-center lg:text-left'
            : 'lg:text-4xl text-2xl font-bold text-center lg:text-right',
        ]"
      >
        Les sous catégories pour l’éducation
      </h1>
      <div class="grid grid-cols-2 my-10 gap-8">
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Ecoles et Universites</a
        >
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Colleges et Lycees</a
        >
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Formations professionnelles</a
        >
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Centres de recherches</a
        >
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Formations à distance</a
        >
        <a href="#" class="lg:text-xl text-sm bg-gray-100 px-4 py-2 rounded-xl"
          >Centres de documentation</a
        >
      </div>
      <div class="w-full text-center">
        <a href="#" class="hover:underline lg:text-lg text-xs">Tout afficher</a>
      </div>
    </div>
    <div v-if="!props.toRight">
      <div
        class="h-96 w-80 rounded-2xl bg-gradient-to-br from-[#B9E3DA] to-adna-green hidden lg:flex justify-center items-center"
      >
        <div class="h-60 w-60 rounded-full bg-[#B9E3DA] overflow-hidden p-4">
          <img :src="schoolImage" class="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
