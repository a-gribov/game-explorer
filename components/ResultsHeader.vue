<template>
  <header class="results-header">
    <p v-if="showNoResults" class="no-results">Ничего не найдено</p>

    <button v-if="isFilterActive" class="reset-button" @click="onResetFilters">
      Сбросить фильтры
    </button>
  </header>
</template>

<script setup>
const props = defineProps({
  isFilterActive: Boolean,
  showNoResults: Boolean,
})

// Определяем событие для сброса фильтров
const emit = defineEmits(["resetFilters"])

// Функция для отправки события сброса фильтров в родительский компонент
const onResetFilters = () => {
  emit("resetFilters")
}
</script>

<style scoped lang="scss">
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.no-results {
  color: $text-color-medium;
  font-size: 18px;

  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
}

.reset-button {
  padding: 10px 16px;
  background-color: $primary-color;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  @media (min-width: 767px) {
    margin-left: auto;

    &:hover {
      background-color: $primary-hover-color;
    }
  }
}
</style>
