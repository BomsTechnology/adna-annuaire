<script setup>
import loudspeakerImage from "@/assets/images/loudspeaker.png";
</script>

<template>
  <section class="p-4">
    <div
      class="bg-[#006BC6] rounded-2xl w-full flex items-center text-white justify-center py-6 px-12 relative overflow-hidden"
    >
      <div class="lg:w-1/2 w-full">
        <h1 class="text-2xl lg:text-4xl font-semibold lg:text-left text-center">
          Augmentez votre chiffre d’affaire en vulgarisant vos services.
        </h1>
        <p class="mt-8 text-sm lg:text-xl lg:text-left text-center">
          Grace à <span class="font-bold">Adna Annonce</span> mettez en avant
          vos produits et services et faite grimpez vos recettes
        </p>
        <button
          type="button"
          class="mt-6 bg-adna-yellow mx-auto text-adna-brown py-3 px-8 rounded-lg text-sm lg:text-xl font-semibold"
        >
          Publier votre 1ere annonce
        </button>
      </div>
      <div
        class="w-1/3 lg:w-1/2 lg:flex hidden justify-end items-center relative"
      >
        <img
          :src="loudspeakerImage"
          class="lg:h-80 h-40 object-cover z-10"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
