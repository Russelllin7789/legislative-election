<template>
  <div
    class="w-full px-[200px] py-[104px] bg-orange-light flex items-center justify-center mt-[613px]"
  >
    <div class="w-[1200px] flex items-stretch justify-stretch">
      <div
        class="flex flex-col py-14 pl-7 pr-14 bg-[#ffffff] rounded-l-lg w-[50%]"
      >
        <div class="flex flex-col items-center justify-center mb-5">
          <div
            class="flex text-base font-bold text-[#ffffff] bg-gray-darker rounded-lg px-3 py-2"
          >
            ADVOCATE
          </div>
          <div class="text-orange-primary py-4 text-[64px] leading-[93px]">
            候選人主張
          </div>
        </div>
        <div>
          <p class="text-[28px] leading-[42px] font-bold">
            我堅信 ! 藉由推動更完善的<span class="text-orange-primary"
              >貓咪福利</span
            >和相關政策，更是間接地投資於<span class="text-orange-primary"
              >台灣的未來</span
            >。
          </p>
        </div>
        <div>
          <p class="mt-5 text-lg">
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
      </div>
      <div
        class="flex w-[50%] rounded-r-lg h-0 pb-[100%] overflow-hidden bg-[url('/advocate-avatar.png')] background-img-container"
      >
        <!-- <div
          class="w-full h-0 pb-[100%] overflow-hidden bg-[url('/advocate-avatar.png')] background-img-container"
        ></div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.background-img-container {
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>
