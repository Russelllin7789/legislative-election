<script setup lang="ts"></script>

<template>
  <div class="block w-full pt-[100px]">
    <div class="flex items-center justify-center w-full">
      <div class="w-[900px] pt-[100px]">
        <img src="/slogan.svg" alt="election slogan" />
        <div class="flex items-center justify-center mt-6">
          <div
            class="text-[28px] leading-[42px] text-[#ffffff] font-bold bg-gray-darker rounded-2xl px-3 py-4"
          >
            2024 立委參選人
          </div>
          <div class="flex items-center justify-center">
            <div
              class="w-[50px] h-[50px] rounded-full bg-orange-primary text-[#ffffff] font-bold flex items-center justify-center text-[30px] ml-8"
            >
              3
            </div>
            <div
              class="text-[40px] leading-[60px] text-orange-primary font-bold ml-4"
            >
              喵立翰 Miao Li-Han
            </div>
          </div>
        </div>
        <div class="relative flex items-center justify-center pt-8">
          <div
            class="absolute top-5 left-1/2 transform -translate-x-1/2 w-[420px] z-10"
          >
            <img src="/avatar.png" alt="legislator avatar" />
          </div>
          <div
            class="absolute w-[723px] h-[398px] bg-blue-light rounded-t-[450px] top-[158px]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
