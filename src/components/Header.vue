<template>
  <div class="flex flex-row w-full p-2 font-mono h-fit bg-amber-100">
    <div class="basis-1/3">
      <h2 class="p-4 text-2xl font-bold text-red-400 transition duration-200 ease-in-out cursor-pointer w-fit hover:scale-110"> 🏠 MyApp</h2>
    </div>
    <div class="flex flex-row items-center justify-end p-4 space-x-4 text-lg font-semibold text-blue-400 basis-2/3">
        <div class="transition duration-200 ease-in-out cursor-pointer hover:text-blue-500 hover:scale-110"><router-link to="/">Home</router-link></div>
        <!-- <div class="transition duration-200 ease-in-out cursor-pointer hover:text-blue-500 hover:scale-110"><router-link to="/update-profile">Profile</router-link></div> -->
        <div class="transition duration-200 ease-in-out cursor-pointer hover:text-blue-500 hover:scale-110"><div @click="onClickShowCard">Profile</div>
        <!-- <div v-if="showCard" class="absolute p-4 bg-white rounded shadow-lg right-4 top-16">
        </div> -->
      </div>
    </div>
  </div>

  <section>
     <div v-if="showCard" class="mb-6">
    <ProfileCard />
  </div>
  </section>

</template>
<script setup>
import { ref, watch } from 'vue';
import ProfileCard from './ProfileCard.vue';

  const showCard =  ref(false);
  function onClickShowCard() {
    showCard.value = !showCard.value;
  }
  // thay vì dùng console.log trực tiếp trong hàm, ta dùng watch để theo dõi thay đổi của showCard khác với React
  watch(showCard, (val) => {
    console.log('showCard changed:', val);
  });
</script>