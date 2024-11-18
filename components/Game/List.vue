<template>
  <div class="game-list">
    <GameCard
      v-for="game in games"
      :key="game.id"
      :game="game"
      @select="handleSelect"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  games: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(["select"])

const handleSelect = (game) => {
  emit("select", game)
}
</script>

<style scoped lang="scss">
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 0 32px 32px;
  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }
}
</style>
