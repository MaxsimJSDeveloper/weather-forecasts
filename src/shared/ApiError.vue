<script lang="ts" setup>
defineProps<{
  error: string
}>()
</script>

<template>
  <h2>Error</h2>
  <p>{{ error }}</p>
</template>
