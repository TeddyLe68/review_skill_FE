<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router';
</script>


<template>
    <div>
        <Header /> <!-- Common header for all pages -->
        <main>
            <RouterView /> <!-- Slot for page-specific content -->
        </main>
        <Footer /> <!-- Common footer for all pages -->
    </div>
</template>