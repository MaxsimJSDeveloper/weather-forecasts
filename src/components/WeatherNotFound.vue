<template>
  <div>
    <h2 class="not-found-title">Weather Data Not Found</h2>
    <p class="not-found-message">
      Sorry, we couldn’t find the weather information for the specified location. <br />
      Please check the city name and try again.
    </p>
    <button class="retry-button" @click="$emit('try-again')">Go Back</button>
  </div>
</template>

<style scoped>
.not-found-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.1rem;
  color: var(--secondary-text-color);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.retry-button {
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition:
    background-color 0.25s,
    transform 0.15s ease;
}

.retry-button:hover {
  background-color: var(--accent-color-hover);
  transform: translateY(-1px);
}

.retry-button:active {
  transform: translateY(1px);
}
</style>
