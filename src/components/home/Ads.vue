<script setup>
import Ads1 from "../Ads.vue";
import binocularsImage from "@/assets/images/binoculars.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<template>
  <section class="bg-gray-100 w-full mt-10 py-6 px-8 lg:px-12">
    <h1 class="lg:text-4xl text-2xl font-bold text-adna-green">Adna Annonce</h1>

    <swiper
      :slidesPerView="4"
      :spaceBetween="5"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
      class="lg:px-12 my-4"
    >
      <swiper-slide><Ads1 /></swiper-slide>
      <swiper-slide><Ads1 /></swiper-slide>
      <swiper-slide><Ads1 /></swiper-slide>
      <swiper-slide
        class="!h-72 w-72 flex flex-col justify-center items-center px-2 bg-white rounded-lg overflow-hidden"
      >
        <img :src="binocularsImage" class="object-cover h-36" alt="" />

        <h1 class="font-medium text-center text-lg leading-6 mb-2">
          Découvrez plus 1.500 Annonces et trouvez votre compte
        </h1>
        <button
          type="button"
          class="bg-adna-green text-white py-2 px-3 font-medium rounded-lg"
        >
          Découvrir
        </button>
      </swiper-slide>
    </swiper>
  </section>
</template>
