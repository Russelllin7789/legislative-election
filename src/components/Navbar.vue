<script setup lang="ts"></script>

<template>
  <div class="flex grow-[2]">
    <ul class="flex w-full items-center justify-center">
      <li class="text-lg">
        <router-link to="/advocate" class="hover:font-bold"
          >候選人主張</router-link
        >
      </li>
      <li class="text-lg ml-8">
        <router-link to="/activity" class="hover:font-bold"
          >最新活動</router-link
        >
      </li>
      <li class="text-lg ml-8">
        <router-link to="/issue" class="hover:font-bold">政策議題</router-link>
      </li>
      <li class="text-lg ml-8">
        <router-link to="/donation" class="hover:font-bold"
          >小額捐款</router-link
        >
      </li>
      <li class="text-lg ml-8">
        <router-link to="/service" class="hover:font-bold"
          >民眾服務信箱</router-link
        >
      </li>
    </ul>
  </div>
</template>
