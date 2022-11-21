import { onMounted } from 'vue';
<script setup>
import {
  PhotoIcon,
  StarIcon,
  ListBulletIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  QuestionMarkCircleIcon,
  BuildingOffice2Icon,
  ClockIcon,
  MegaphoneIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import useCompany from "@/composables/useCompany";
const { company, loading, errors, getCompany } = useCompany();
const props = defineProps({
  slug: {
    required: true,
    type: String,
  },
});

onMounted(async function () {
  await getCompany(props.slug);
});
</script>
<template>
  <section class="relative">
    <div class="h-52 bg-gray-50 w-full"></div>
    <div
      class="h-52 w-52 rounded-full border -mt-28 bg-white overflow-hidden lg:mx-10 mx-auto flex justify-center items-center"
    >
      <PhotoIcon class="w-32 h-32 text-gray-300 animate-pulse" v-if="loading" />
      <img
        v-else-if="company.image"
        :src="company.image"
        class="w-full h-full object-cover"
        alt=""
      />
      <BuildingOffice2Icon class="w-32 h-32 text-gray-300" v-else />
    </div>
    <div
      class="lg:mx-14 flex flex-col lg:justify-start justify-center lg:items-start items-center py-10"
    >
      <h1 class="lg:text-3xl font-bold text-xl">Gno Solutions</h1>
      <h3 class="text-gray-500 mt-1 text-xs lg:text-lg">
        Formations professionnelles
      </h3>
      <div class="space-y-2 mt-2">
        <div
          class="flex items-center lg:justify-start justify-center space-x-3"
        >
          <h4 class="flex space-x-2 items-center">
            <StarIcon class="h-6 w-6 text-yellow-500" /> <span>4 étoiles</span>
          </h4>
          <h4 class="flex space-x-2 items-center">
            <PhoneIcon class="h-5 w-5 text-adna-brown" />
            <span>237 6 99 99 99 99</span>
          </h4>
        </div>

        <div
          class="flex items-center lg:justify-start justify-center space-x-3"
        >
          <h4 class="flex space-x-2 items-center">
            <ListBulletIcon class="h-6 w-6 text-gray-500" />
            <span>40 avis</span>
          </h4>
          <a
            href="https://gno-business.com"
            target="_blank"
            class="flex space-x-2 items-center"
          >
            <GlobeAltIcon class="h-6 w-6 text-blue-500" />
            <span>https://gno-business.com</span>
            <ArrowTopRightOnSquareIcon class="h-5 w-5 text-blue-100" />
          </a>
        </div>
        <div
          class="flex items-center lg:justify-start justify-center space-x-3"
        >
          <h4 class="flex space-x-2 items-center">
            <MapPinIcon class="h-6 w-6 text-adna-green" />
            <span>Douala, Bonamoussadi</span>
          </h4>
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-800"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <title>Logo Facebook</title>
              <path
                d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                fill-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 stroke-pink-500 text-pink-500"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <title>Logo Instagram</title>
              <path
                d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
              />
              <path
                d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-300"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <title>Logo Twitter</title>
              <path
                d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-900"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <title>Logo Linkedin</title>
              <path
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex w-full overflow-x-auto bg-gray-100 py-3 px-10 text-xs font-semibold text-gray-700 md:text-sm"
    >
      <a
        href="#about"
        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold hover:text-adna-green"
        ><span><QuestionMarkCircleIcon class="h-5 w-5" /></span
        ><span class="hidden lg:block">A propos</span></a
      >
      <a
        href="#services"
        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold hover:text-adna-green"
        ><span><ClockIcon class="h-5 w-5" /></span
        ><span class="hidden lg:block">Horaires / Services</span></a
      >
      <a
        href="#pictures"
        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold hover:text-adna-green"
      >
        <span><PhotoIcon class="h-5 w-5" /></span>
        <span class="hidden lg:block">Galerie</span>
      </a>
      <a
        href="#ads"
        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold hover:text-adna-green"
      >
        <span><MegaphoneIcon class="h-5 w-5" /></span>
        <span class="hidden lg:block"> Annonces (0)</span>
      </a>
      <a
        href="#rating"
        class="flex items-center space-x-1 border-r border-gray-800 px-4 hover:font-bold hover:text-adna-green"
      >
        <span><DocumentTextIcon class="h-5 w-5" /></span>
        <span class="hidden lg:block"> Avis (0)</span>
      </a>
    </div>
    <div class="container px-10 p-4 w-full lg:flex">
      <div class="space-y-10 lg:w-2/3">
        <div class="mt-4">
          <h1
            id="about"
            class="flex items-center space-x-4 font-bold tracking-widest lg:text-xl"
          >
            <span
              ><QuestionMarkCircleIcon class="h-7 w-7 text-adna-green" /></span
            ><span>A Propos</span>
          </h1>
          <p
            class="mt-4 whitespace-pre-line text-justify text-sm leading-6 lg:mx-8"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            adipisci accusantium, illo qui est voluptates esse praesentium,
            explicabo facere repudiandae aliquid laborum et magnam harum
            necessitatibus veritatis animi repellat cum? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Temporibus adipisci accusantium,
            illo qui est voluptates esse praesentium, explicabo facere
            repudiandae aliquid laborum et magnam harum necessitatibus veritatis
            animi repellat cum?
            <span></span>
            -Lorem ipsum dolor sit, amet consectetur adipisicing -Lorem ipsum
            dolor sit, amet consectetur adipisicing
          </p>
        </div>
        <div
          class="mt-8 lg:hidden flex h-60 w-full items-center justify-center rounded bg-white shadow"
        >
          <span class="font-bold">Google Map</span>
        </div>
        <div class="mt-4">
          <h1
            id="services"
            class="flex items-center space-x-4 font-bold tracking-widest lg:text-xl"
          >
            <span><ClockIcon class="h-7 w-7 text-adna-green" /></span
            ><span>Horaires / Services</span>
          </h1>
          <div class="mt-4 flex flex-col lg:mx-8 lg:flex-row">
            <div class="w-full">
              <h2
                class="font-semibold underline decoration-adna-green underline-offset-4"
              >
                Horaires
              </h2>
              <ul class="ml-2 mt-2 list-disc space-y-1 px-2 text-sm">
                <li>Lunid 08h - 18h</li>
                <li>Lunid 08h - 18h</li>
                <li>Lunid 08h - 18h</li>
              </ul>
            </div>
            <div class="w-full">
              <h2
                class="font-semibold underline decoration-adna-green underline-offset-4"
              >
                Services
              </h2>
              <ul class="ml-2 mt-2 list-disc space-y-1 px-2 text-sm">
                <li>Lunid 08h - 18h</li>
                <li>Lunid 08h - 18h</li>
                <li>Lunid 08h - 18h</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h1
            id="pictures"
            class="flex items-center space-x-4 font-bold tracking-widest lg:text-xl"
          >
            <span><PhotoIcon class="h-7 w-7 text-adna-green" /></span
            ><span>Images de l'entreprise</span>
          </h1>
          <div
            class="mt-4 grid grid-cols-2 gap-4 overflow-x-auto lg:mx-8 lg:grid-cols-5"
          >
            <div class="h-32 w-32 overflow-hidden rounded shadow">
              <PhotoIcon class="w-32 h-32 text-gray-100" />
            </div>
            <div class="h-32 w-32 overflow-hidden rounded shadow">
              <PhotoIcon class="w-32 h-32 text-gray-100" />
            </div>
            <div class="h-32 w-32 overflow-hidden rounded shadow">
              <PhotoIcon class="w-32 h-32 text-gray-100" />
            </div>
            <div class="h-32 w-32 overflow-hidden rounded shadow">
              <PhotoIcon class="w-32 h-32 text-gray-100" />
            </div>
            <div
              class="flex h-32 w-32 items-center justify-center rounded bg-gray-100 text-center text-sm shadow"
            >
              <span class="font-bold">Voir toutes les images</span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h1
            id="ads"
            class="flex items-center space-x-4 font-bold tracking-widest lg:text-xl"
          >
            <span><MegaphoneIcon class="h-7 w-7 text-adna-green" /></span
            ><span>Annonces</span>
          </h1>
          <div class="mt-4 grid lg:mx-8 lg:grid-cols-2">
            <div
              class="flex h-36 w-full items-center rounded-lg border bg-white shadow"
            >
              <div class="h-full overflow-hidden rounded-l-lg">
                <PhotoIcon class="w-32 h-32 text-gray-100" />
              </div>
              <div class="flex h-full grow justify-start items-center px-4">
                <div
                  class="flex h-full flex-col justify-center items-center py-2"
                >
                  <div>
                    <h1
                      class="whitespace-normal text-sm font-bold leading-5 lg:text-lg"
                    >
                      Gâteau à la crème chocolat
                    </h1>
                    <h6
                      class="whitespace-normal text-sm font-semibold text-gray-800 lg:text-lg"
                    >
                      10 000 XFA
                    </h6>
                    <div class="text-xs font-light text-gray-400">
                      <h6>Automobile</h6>
                      <h6>Douala Bonamousadi - 12/05/2022 à 16h30</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h1
            id="rating"
            class="flex items-center space-x-4 font-bold tracking-widest lg:text-xl"
          >
            <span><DocumentTextIcon class="h-7 w-7 text-adna-green" /></span
            ><span>Avis</span>
          </h1>
          <div class="mt-4 lg:mx-8">
            <div class="border-b border-gray-300 py-3">
              <div class="float-left mr-3 flex items-center space-x-2">
                <PhotoIcon class="h-16 w-16 text-gray-100" />
                <div>
                  <h3 class="font-semibold">John Doe</h3>
                  <span class="flex items-center">
                    <StarIcon class="h-4 w-4 text-orange-400" />
                    <StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                      class="h-4 w-4 text-orange-400"
                    /><StarIcon class="h-4 w-4 text-orange-400" /><StarIcon
                      class="h-4 w-4 text-gray-400"
                    />
                  </span>
                  <span class="text-xs text-gray-500">23 Juin 2020</span>
                </div>
              </div>
              <p class="text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
                animi natus assumenda consequuntur laboriosam sapiente?
                Eligendi, fugiat quod debitis, voluptatem esse velit
                necessitatibus voluptas rem magni incidunt soluta nulla.fugiat
                quod debitis, voluptatem esse velit necessitatibus voluptas rem
                magni incidunt soluta nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse lg:w-1/3 lg:flex-col">
        <div
          class="mt-8 hidden lg:flex h-60 w-full items-center justify-center rounded bg-white shadow"
        >
          <span class="font-bold">Google Map</span>
        </div>
        <div class="mt-8 w-full rounded bg-white p-4 shadow lg:mt-0">
          <h1 class="text-xl font-bold">Contacter</h1>
          <div class="mt-4 flex items-center text-sm font-bold">
            <button class="w-full rounded bg-adna-green px-3 py-2 text-white">
              E-mail
            </button>
            <button class="w-full px-3 py-2">Télépone</button>
          </div>
          <form class="mt-4">
            <div class="">
              <label
                for="title"
                class="mb-1 block text-sm font-medium text-gray-900"
                >Nom Complet</label
              >
              <input
                type="text"
                id="title"
                required
                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div class="mt-4">
              <label
                for="title"
                class="mb-1 block text-sm font-medium text-gray-900"
                >Adresse E-mail</label
              >
              <input
                type="email"
                id="title"
                required
                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div class="mt-4">
              <label
                for="title"
                class="mb-1 block text-sm font-medium text-gray-900"
                >Téléphone</label
              >
              <input
                type="email"
                id="title"
                required
                class="block w-full rounded border border-gray-200 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div class="mt-4">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div class="mt-1">
                <textarea
                  id="message"
                  rows="5"
                  required
                  class="mt-1 block w-full rounded-md border border-gray-200 p-2.5 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                class="hover:bg-secondary focus:bg-primary w-full transform rounded-md bg-adna-green px-4 py-2 text-sm tracking-wide text-white transition-colors duration-200 focus:outline-none"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
