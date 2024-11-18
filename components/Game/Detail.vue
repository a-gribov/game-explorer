<template>
  <section class="game-detail">
    <h1 class="game-title">{{ game.name }}</h1>

    <div class="game-content">
      <div class="game-info">
        <p class="game-description">{{ game.description_raw }}</p>

        <div class="game-stats">
          <p><strong>Рейтинг:</strong> {{ game.rating }}</p>

          <p><strong>Дата выпуска:</strong> {{ game.released }}</p>
        </div>
      </div>

      <NuxtImg
        :src="game.background_image"
        :alt="game.name"
        class="game-image"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.game-detail {
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  padding: 24px;
  background-color: $background-color-light;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
}

.game-title {
  font-size: 32px;
  font-weight: bold;
  color: $text-color-dark;
  text-align: left;
  margin-bottom: 16px;
}

.game-content {
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.game-info {
  flex: 1;
  padding-right: 20px;
  line-height: 1.6;
}

.game-description {
  font-size: 18px;
  color: $text-color-light;
  margin-bottom: 16px;
}

.game-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  color: $text-color-dark;
  font-weight: bold;
}

.game-image {
  flex: 1;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  object-fit: cover;
  user-select: none;

  @media (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
