<template>
  <div class="container">
    <!-- Фильтр игр -->
    <GameFilter
      :genres="genres"
      :selectedGenre="selectedGenre"
      :searchQuery="searchQuery"
      @update:genre="setGenre"
      @update:search="setSearchQuery"
    />

    <!-- Лоадер во время загрузки -->
    <Loader v-if="isLoading" />

    <!-- Список игр -->
    <div v-else>
      <ResultsHeader
        v-if="isFilterActive"
        :isFilterActive="isFilterActive"
        :showNoResults="filteredGames.length === 0"
        @resetFilters="resetFilters"
      />

      <GameList :games="filteredGames" @select="openGameModal" />

      <!-- Модальное окно для отображения деталей игры -->
      <Modal v-if="isModalOpen" @close="closeGameModal">
        <GameDetail :game="selectedGame" />
      </Modal>
    </div>
  </div>
</template>

<script setup>
const {
  genres,
  selectedGame,
  selectedGenre,
  searchQuery,
  filteredGames,
  setGenre,
  setSearchQuery,
  selectGame,
  isFilterActive,
  resetFilters,
  loadGames,
  loadGenres,
} = useGameData()

const { isModalOpen, toggleModal } = useModal()

// Открытие модального окна для выбранной игры
const openGameModal = (game) => {
  selectGame(game)
  toggleModal(true)
}

// Закрытие модального окна
const closeGameModal = () => {
  selectGame(null)
  toggleModal(false)
}

// Загрузка данных игр и жанров
const isLoading = ref(true)

onMounted(async () => {
  try {
    await Promise.all([loadGames(), loadGenres()])
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
