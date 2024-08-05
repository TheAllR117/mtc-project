<script lang="ts" setup>
import { markRaw, watch, shallowRef, ref } from 'vue'
import { useRoute } from 'vue-router'
import DashboardLayout from './DashboardLayout.vue'
import AppLayoutHomepage from './AppLayoutHomepage.vue'
import AppLayoutDefault from './AppLayoutDefault.vue'

const importedLayouts = shallowRef<any>({
  DashboardLayout,
  AppLayoutHomepage
})
const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout,
  async (metaLayout: any) => {
    try {
      const component = metaLayout && importedLayouts.value[metaLayout]
      layout.value = markRaw(component || AppLayoutDefault)
    } catch (e) {
      layout.value = markRaw(AppLayoutDefault)
    }
  },
  {
    immediate: false
  }
)
</script>

<template>
  <component :is="layout"><router-view /></component>
</template>
