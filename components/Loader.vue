<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid $primary-color;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
