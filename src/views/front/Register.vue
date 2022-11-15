<script setup>
import team from "@/assets/team2.png";
import Step1 from "@/components/register/Step1.vue";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/vue/24/solid";
import Step2 from "@/components/register/Step2.vue";
import Step3 from "@/components/register/Step3.vue";
import Step4 from "@/components/register/Step4.vue";
import Step5 from "@/components/register/Step5.vue";
import Step6 from "@/components/register/Step6.vue";
import { ref } from "vue";

const step = ref(1);
</script>

<template>
  <div class="h-full w-full lg:flex border-t">
    <div
      class="w-full h-full bg-gray-50 lg:flex flex-col m-2 rounded-xl justify-center items-center hidden lg:w-1/2 p-8 relative"
    >
      <div class="">
        <h1 class="text-adna-brown text-4xl font-bold uppercase">
          Inscription
        </h1>
        <h3 class="text-gray-700 text-xl font-bold text-center mt-4">
          Créez un compte et tirez parti de l'ensemble de nos services.
        </h3>
      </div>
      <img :src="team" alt="" class="z-10 h-[500px]" />
    </div>
    <div class="w-full h-full lg:w-1/2 p-8">
      <div>
        <h1 class="text-lg font-bold">Rejoindre l'annuaire Gratuitement</h1>
        <h3 class="mt-1 text-sm">
          Déja membre ?
          <a href="#" class="text-adna-brown hover:underline">se connecter</a>
        </h3>
      </div>
      <div class="w-full h-2 mt-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          :class="[
            step == 1
              ? 'w-[10%] h-full bg-adna-yellow transition-all duration-1000'
              : step == 2
              ? 'w-[25%] h-full bg-adna-yellow transition-all duration-1000'
              : step == 3
              ? 'w-[40%] h-full bg-adna-yellow transition-all duration-1000'
              : step == 4
              ? 'w-[55%] h-full bg-adna-yellow transition-all duration-1000'
              : step == 5
              ? 'w-[75%] h-full bg-adna-yellow transition-all duration-1000'
              : 'w-[90%] h-full bg-adna-yellow transition-all duration-1000',
          ]"
        ></div>
      </div>
      <transition-group
        enter-active-class="transition-all duration-1000"
        enter-from-class="opacity-0 translate-x-20"
        enter-to-class="opacity-1 translate-x-0"
        leave-active-class="transition-all duration-1000 absolute ease-in-out"
        leave-from-class="opacity-0 translate-x-0"
        leave-to-class=" -translate-x-20 opacity-0"
      >
        <Step1 v-if="step == 1" />
        <Step2 v-if="step == 2" />
        <Step3 v-if="step == 3" />
        <Step4 v-if="step == 4" />
        <Step5 v-if="step == 5" />
        <Step6 v-if="step == 6" />
      </transition-group>

      <div class="mt-10">
        <button
          type="button"
          v-if="step < 6"
          @click="step++"
          class="w-full rounded-lg flex items-center justify-center group space-x-2 hover:shadow-lg bg-adna-yellow text-adna-brown focus:outline-none py-2 px-3"
        >
          <span>Continuer</span>
          <ArrowRightIcon class="h-5 w-5 group-hover:ml-4 transition-all" />
        </button>
        <button
          type="button"
          v-else
          class="w-full rounded-lg flex items-center justify-center group space-x-2 hover:shadow-lg bg-adna-yellow text-adna-brown focus:outline-none py-2 px-3"
        >
          <span>Enregistrer</span>
          <CheckCircleIcon class="h-5 w-5 group-hover:ml-4 transition-all" />
        </button>
      </div>
    </div>
  </div>
</template>
