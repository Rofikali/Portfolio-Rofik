type ThemeMode = 'light' | 'dark'

const storageKey = 'portfolio-theme'
const themeMode = ref<ThemeMode>('dark')

const applyThemeMode = (mode: ThemeMode) => {
  if (!import.meta.client) {
    return
  }

  document.documentElement.classList.toggle('light', mode === 'light')
  document.documentElement.classList.toggle('dark', mode === 'dark')
  document.documentElement.style.colorScheme = mode
  window.localStorage.setItem(storageKey, mode)
}

export const useThemeMode = () => {
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode
    applyThemeMode(mode)
  }

  const toggleThemeMode = () => {
    setThemeMode(themeMode.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const storedMode = window.localStorage.getItem(storageKey)
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const initialMode = storedMode === 'light' || storedMode === 'dark'
      ? storedMode
      : prefersLight
        ? 'light'
        : 'dark'

    setThemeMode(initialMode)
  })

  return {
    themeMode: readonly(themeMode),
    setThemeMode,
    toggleThemeMode
  }
}
