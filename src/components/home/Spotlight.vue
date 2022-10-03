<script setup>
import bookImage from "@/assets/images/books.png";
import bowlingImage from "@/assets/images/bowling.png";
import syringueImage from "@/assets/images/syringue.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>
<template>
  <section
    class="xl:w-2/3 sm:w-5/6 w-full mx-auto px-6 -mt-20 shadow-lg bg-white rounded-lg py-4"
  >
    <h1 class="font-medium text-2xl text-center">
      Découvrez le meilleurs de vos activités
    </h1>
    <swiper
      :slidesPerView="3"
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      class="mt-10"
    >
      <swiper-slide
        class="bg-gray-100 !h-60 w-64 rounded-lg p-3 relative overflow-hidden"
      >
        <h1 class="font-bold text-adna-brown">Education</h1>
        <p class="font-semibold text-2xl mt-3">
          Des fournitures scolaires de qualité ?
        </p>
        <button
          type="button"
          class="mt-4 bg-adna-yellow text-adna-brown py-2 px-3 rounded-lg text-sm font-semibold"
        >
          Je déniche
        </button>
        <img
          :src="bookImage"
          class="h-20 w-20 object-cover absolute bottom-0 right-0"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        class="bg-gray-100 !h-60 w-64 rounded-lg p-3 relative overflow-hidden"
      >
        <h1 class="font-bold text-adna-brown">Santé</h1>
        <p class="font-semibold text-2xl mt-3">
          Centres de vaccination Covid 19 ?
        </p>
        <button
          type="button"
          class="mt-4 bg-adna-yellow text-adna-brown py-2 px-3 rounded-lg text-sm font-semibold"
        >
          Je trouve
        </button>
        <img
          :src="syringueImage"
          class="h-20 w-20 object-cover absolute bottom-0 right-0"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        class="bg-gray-100 !h-60 w-64 rounded-lg p-3 relative overflow-hidden"
      >
        <h1 class="font-bold text-adna-brown">Attractions</h1>
        <p class="font-semibold text-2xl mt-3">
          De bon coins pour s’amuser et se divertir ?
        </p>
        <button
          type="button"
          class="mt-4 bg-adna-yellow text-adna-brown py-2 px-3 rounded-lg text-sm font-semibold"
        >
          J'y vais
        </button>
        <img
          :src="bowlingImage"
          class="h-20 w-20 object-cover absolute bottom-0 right-0"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </section>
</template>
