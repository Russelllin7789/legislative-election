<script setup lang="ts">
import Navbar from "../Navbar.vue";
import SocialPlatform from "../SocialPlatform.vue";
</script>

<template>
  <div class="h-[100px] w-full px-6 py-4 bg-[#f5f5f5]">
    <div class="max-w-[1920px] w-full h-full flex items-center justify-around">
      <div class="h-full flex items-center">
        <div class="w-[52.17px] h-[43px]">
          <img src="logo.png" alt="official logo" class="w-full h-full" />
        </div>
        <div class="text-2xl leading-[36px] text-orange-primary font-bold ml-2">
          喵立翰 Miao Li-Han
        </div>
      </div>
      <Navbar />
      <SocialPlatform />
    </div>
  </div>
</template>
