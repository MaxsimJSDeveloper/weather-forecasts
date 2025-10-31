<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const symbolId = computed(() => `#icon-${props.id}`)
</script>

<template>
  <svg :width="24" :height="24"><use :href="symbolId" /></svg>
</template>
