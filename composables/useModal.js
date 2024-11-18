export function useModal() {
  const isModalOpen = ref(false) // Состояние модального окна

  // Управление состоянием модального окна
  const openModal = () => {
    if (!isModalOpen.value) {
      isModalOpen.value = true
      document.body.style.overflow = "hidden"
    }
  }

  const closeModal = () => {
    if (isModalOpen.value) {
      isModalOpen.value = false
      document.body.style.overflow = ""
    }
  }

  const toggleModal = (value) => {
    value ? openModal() : closeModal()
  }

  return {
    isModalOpen,
    toggleModal,
  }
}
