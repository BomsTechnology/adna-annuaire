<script setup>
import {
  HomeIcon,
  AcademicCapIcon,
  TruckIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  LightBulbIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  ScaleIcon,
} from "@heroicons/vue/24/outline";
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
  <nav
    class="flex justify-center items-center no-scrollbar overflow-x-auto space-x-8 py-6 px-16"
  >
    <router-link
      :to="{ name: 'home' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <HomeIcon class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green" />
      <span>Accueil</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <AcademicCapIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Education</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <TruckIcon class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green" />
      <span>Transport</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <BuildingOffice2Icon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Immobilier</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <BanknotesIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Finance</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <LightBulbIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Energie</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <BuildingStorefrontIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Commerce</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <UserGroupIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Associations</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <BuildingLibraryIcon
        class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green"
      />
      <span>Culture</span>
    </router-link>
    <router-link
      :to="{ name: 'category' }"
      class="text-xs lg:text-sm group hover:text-adna-green flex flex-col justify-center items-center"
    >
      <ScaleIcon class="md:h-6 h-4 md:w-6 w-4 group-hover:text-adna-green" />
      <span>Justice</span>
    </router-link>
  </nav>
</template>
