<template>
  <div class="w-full py-[104px] flex justify-center">
    <div class="w-[1200px] flex">
      <div class="w-[50%] mr-4">
        <Support />
      </div>
      <div class="w-[50%]">
        <Service class="h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Support from "@/Section/subContent/Support.vue";
import Service from "@/Section/subContent/Service.vue";
</script>
