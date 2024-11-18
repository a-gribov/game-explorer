export function useGameFilter(games) {
  const selectedGenre = ref(null)
  const searchQuery = ref("")

  // Установка фильтров
  const setGenre = (genre) => {
    selectedGenre.value = genre
  }

  const setSearchQuery = (query) => {
    searchQuery.value = query.trim() // Убираем лишние пробелы
  }

  // Сброс фильтров
  const resetFilters = () => {
    selectedGenre.value = null
    searchQuery.value = ""
  }

  // Вычисление отфильтрованных игр
  const filteredGames = computed(() => {
    return games.value.filter((game) => {
      const matchesGenre = selectedGenre.value
        ? game.genres.some((genre) => genre.id === selectedGenre.value.id)
        : true

      const matchesSearch = searchQuery.value
        ? game.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        : true

      return matchesGenre && matchesSearch
    })
  })

  return {
    // Реактивные данные
    selectedGenre,
    searchQuery,

    // Методы
    setGenre,
    setSearchQuery,
    resetFilters,

    // Отфильтрованные данные
    filteredGames,
  }
}
