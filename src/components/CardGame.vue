<template>
  <div class="card" @click="flipCard" :class="{ flipped: isFlipped }">
    <div class="card-front" v-if="isFlipped">{{ value }}</div>
    <div class="card-back" v-else>❓</div>
  </div>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    value: Number,
    isFlipped: Boolean,
    canFlip: Boolean
  },
  methods: {
    flipCard() {
      if (!this.isFlipped && this.canFlip) {
        this.$emit('flip', this.value);
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 150px; /* Aumentar el ancho */
  height: 100px; /* Reducir el alto */
  border: 2px solid #333;
  display: inline-block;
  margin: 10px;
  text-align: center;
  line-height: 100px; /* Ajustar la línea para centrar el texto */
  font-size: 2rem;
  cursor: pointer;
}

.card.flipped {
  background-color: #31a361;
}

.card-back {
  background-color: #2b0707;
}
</style>

