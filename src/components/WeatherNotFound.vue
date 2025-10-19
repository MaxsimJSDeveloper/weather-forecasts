<template>
  <div class="not-found-container">
    <div class="not-found-card">
      <h2 class="not-found-title">Weather Data Not Found</h2>
      <p class="not-found-message">
        Sorry, we couldn’t find the weather information for the specified location. <br />
        Please check the city name and try again.
      </p>
      <button class="retry-button" @click="$emit('try-again')">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-card {
  background: var(--card-bg, #fff);
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 0.4s ease;
}

.not-found-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.1rem;
  color: var(--secondary-text-color, #555);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.retry-button {
  background-color: var(--accent-color, #42b983);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.25s,
    transform 0.15s ease;
}

.retry-button:hover {
  background-color: var(--accent-color-hover, #369a6e);
  transform: translateY(-1px);
}

.retry-button:active {
  transform: translateY(1px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
