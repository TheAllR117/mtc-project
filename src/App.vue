<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './layouts/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
  </AppLayout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
