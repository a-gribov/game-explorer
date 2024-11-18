// Обработчик ошибок для API-запросов
const handleApiError = (error, context) => {
  console.error(`Ошибка при загрузке данных (${context}):`, error)
  throw new Error(
    `Не удалось загрузить данные (${context}). Проверьте соединение или повторите попытку позже.`
  )
}

// Общая функция для выполнения API-запросов
const fetchApiData = async (endpoint, context) => {
  const { $apiFetch } = useNuxtApp()
  try {
    const response = await $apiFetch(endpoint)
    return response.results || response // Возвращаем данные или массив результатов
  } catch (error) {
    handleApiError(error, context)
  }
}

// Методы для загрузки данных

/**
 * Получить список игр
 * @returns {Promise<Array>} Список игр
 */
export const fetchGames = () => fetchApiData("/games", "Игры")

/**
 * Получить список жанров
 * @returns {Promise<Array>} Список жанров
 */
export const fetchGenres = () => fetchApiData("/genres", "Жанры")
