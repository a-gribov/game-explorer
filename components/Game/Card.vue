<template>
  <article @click="selectGame" class="game-card">
    <NuxtImg :src="game.background_image" :alt="game.name" class="game-image" />

    <div class="game-info">
      <h3 class="game-title">{{ game.name }}</h3>
      <p class="game-genres">{{ genreNames }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["select"])

// Вызываем событие выбора игры
const selectGame = () => {
  emit("select", props.game)
}

// Генерация строки жанров
const genreNames = computed(() =>
  (props.game.genres || []).map((genre) => genre.name).join(", ")
)
</script>

<style scoped lang="scss">
.game-card {
  background-color: $card-background-color;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: $box-shadow;
  transition: transform 0.25s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    max-width: unset;
    width: 100%;
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.06);
    }
  }
}
.game-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  user-select: none;
}

.game-info {
  padding: 16px;
  text-align: center;
  background-color: $background-color;
}

.game-title {
  font-size: 18px;
  font-weight: bold;
  color: $text-color-dark;
  margin: 0;
}

.game-genres {
  font-size: 14px;
  color: $text-color-medium;
  margin-top: 8px;
}
</style>
