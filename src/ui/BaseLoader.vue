<script setup lang="ts">
import { AtomSpinner } from 'epic-spinners'
</script>

<template>
  <div class="loader-container">
    <atom-spinner :animation-duration="1000" :size="90" :color="'#42b983'" />
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
}
</style>
