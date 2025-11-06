<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  background: var(--container-bg-color);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px var(--shadow-color);
}
</style>
