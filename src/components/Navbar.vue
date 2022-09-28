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
  <nav class="flex justify-center items-center space-x-8 py-6 px-16">
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <HomeIcon class="h-6 w-6" />
      <span>Accueil</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <AcademicCapIcon class="h-6 w-6" />
      <span>Education</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <TruckIcon class="h-6 w-6" />
      <span>Transport</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <BuildingOffice2Icon class="h-6 w-6" />
      <span>Immobilier</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <BanknotesIcon class="h-6 w-6" />
      <span>Finance</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <LightBulbIcon class="h-6 w-6" />
      <span>Energie</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <BuildingStorefrontIcon class="h-6 w-6" />
      <span>Commerce</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <UserGroupIcon class="h-6 w-6" />
      <span>Associations</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <BuildingLibraryIcon class="h-6 w-6" />
      <span>Culture</span>
    </a>
    <a href="#" class="text-sm flex flex-col justify-center items-center">
      <ScaleIcon class="h-6 w-6" />
      <span>Justice</span>
    </a>
  </nav>
</template>
