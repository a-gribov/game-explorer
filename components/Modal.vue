<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="modal-close" @click="close">✖</button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(["close"]) // Определяем событие close

// Закрытие модального окна
const close = () => {
  emit("close")
}

// Обработчик клавиши Escape
const onKeydown = (event) => {
  if (event.key === "Escape") {
    close()
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown)
})

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown)
})
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--background-color, white);
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 50%;
  max-height: 90%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
    border-radius: 4px;
  }
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: var(--text-color-dark, #333);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--primary-color, #007bff);
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
