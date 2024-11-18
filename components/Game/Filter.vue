<template>
  <div class="game-filter">
    <!-- Поле поиска -->
    <input
      v-model="localSearchQuery"
      @input="emitSearchQuery"
      placeholder="Поиск игр"
      class="filter-input"
    />

    <!-- Выпадающий список для жанров -->
    <div class="select-wrapper">
      <select
        v-model="localSelectedGenre"
        @change="emitSelectedGenre"
        class="filter-select"
      >
        <option :value="null">Все жанры</option>
        <option v-for="genre in genres" :key="genre.id" :value="genre">
          {{ genre.name }}
        </option>
      </select>
      <IconsDropdownArrow class="dropdown-arrow" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  genres: Array,
  selectedGenre: Object,
  searchQuery: String,
})

const emit = defineEmits(["update:genre", "update:search"])

// Локальные значения для управления вводом и выбором
const localSearchQuery = ref(props.searchQuery)
const localSelectedGenre = ref(props.selectedGenre)

// Эмиттеры для обновления родительского состояния
const emitSearchQuery = () => emit("update:search", localSearchQuery.value)
const emitSelectedGenre = () => emit("update:genre", localSelectedGenre.value)

// Следим за внешними изменениями пропсов
watch(
  () => props.searchQuery,
  (newQuery) => {
    localSearchQuery.value = newQuery
  }
)
watch(
  () => props.selectedGenre,
  (newGenre) => {
    localSelectedGenre.value = newGenre
  }
)
</script>

<style scoped lang="scss">
.game-filter {
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: $card-background-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
.filter-input,
.filter-select {
  width: -webkit-fill-available;
  padding: 10px 12px;
  border: 1px solid $text-color-light;
  border-radius: $border-radius;
  font-size: 16px;
  color: $text-color-dark;
  background-color: #fff;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  }
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.filter-select {
  appearance: none;
}

.dropdown-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 24px;
  height: 24px;
}
</style>
