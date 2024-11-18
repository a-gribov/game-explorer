import { fetchGames, fetchGenres } from "~/services/apiService" // Импорт API методов

export function useGameData() {
  const store = useGamesStore()
  const selectedGame = ref(null)

  // Обобщенный метод для загрузки данных с проверкой кэша
  const loadData = async (dataKey, fetchMethod, setMethod, context) => {
    if (store[dataKey].length > 0) return
    try {
      const fetchedData = await fetchMethod()
      store[setMethod](fetchedData)
    } catch (error) {
      console.error(`Ошибка загрузки ${context}:`, error)
    }
  }

  // Загрузка данных игр
  const loadGames = () => loadData("games", fetchGames, "setGames", "игр")

  // Загрузка данных жанров
  const loadGenres = () =>
    loadData("genres", fetchGenres, "setGenres", "жанров")

  // Настройка фильтров
  const {
    selectedGenre,
    searchQuery,
    filteredGames,
    setGenre,
    setSearchQuery,
    resetFilters,
  } = useGameFilter(computed(() => store.games))

  // Управление выбранной игрой
  const selectGame = (game = null) => {
    selectedGame.value = game
  }

  // Состояние активности фильтров
  const isFilterActive = computed(() =>
    Boolean(searchQuery.value || selectedGenre.value)
  )

  return {
    // Данные
    genres: computed(() => store.genres),
    selectedGame,
    selectedGenre,
    searchQuery,

    // Методы
    loadGames,
    loadGenres,
    selectGame,
    setGenre,
    setSearchQuery,
    resetFilters,

    // Состояние
    filteredGames,
    isFilterActive,
  }
}
