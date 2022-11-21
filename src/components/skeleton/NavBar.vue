<script setup></script>
<template>
  <div
    ref="nav"
    class="flex bg-white animate-pulse justify-start xl:justify-center overflow-x-auto no-scrollbar items-center space-x-8 px-8 py-4 lg:px-16"
  >
    <div v-for="i in 7">
      <div class="lg:h-10 h-8 lg:w-10 w-8 mb-1 bg-gray-100"></div>
      <div class="bg-gray-100 h-1 rounded-full w-full"></div>
    </div>
  </div>
</template>
