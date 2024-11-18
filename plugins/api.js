export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apiFetch = (url, params = {}) => {
    return $fetch(url, {
      baseURL: config.public.baseURL,
      params: { ...params, key: config.public.apiKey },
    })
  }

  return {
    provide: {
      apiFetch,
    },
  }
})
