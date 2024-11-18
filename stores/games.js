export const useGamesStore = defineStore("gamesStore", () => {
  const games = ref([])
  const genres = ref([])

  const setGames = (newGames) => {
    games.value = newGames
  }

  const setGenres = (newGenres) => {
    genres.value = newGenres
  }

  return {
    games,
    genres,

    setGames,
    setGenres,
  }
})
