<template>
  <div>
    <NavBar @restart="resetGame" />
    <div class="header">
      <h2 class="moves">Movimientos: {{ moves }}</h2>      
      <h2 class="timer">Cronómetro: {{ formatTime(time) }}</h2>
      <h2 class="correct-guesses">Aciertos: {{ correctGuesses }}</h2>
    </div>
    <div class="board">
      <CardGame
        v-for="(card, index) in shuffledCards"
        :key="index"
        :value="card.value"
        :isFlipped="card.isFlipped"
        :canFlip="canFlipCard"
        @flip="handleFlip(index)"
      />
    </div>
    <div v-if="gameWon">
      <h2>¡Felicidades, has ganado!</h2>
      <button @click="resetGame">Reiniciar</button>
    </div>
  </div>
</template>


<script>
import CardGame from './CardGame.vue';
import NavBar from './NavBar.vue'; // Asegúrate de que el nombre aquí sea NavBar

export default {
  components: { CardGame, NavBar }, // Asegúrate de que NavBar esté en esta lista
  
  data() {
    return {
      cards: [],
      moves: 0,
      correctGuesses: 0,
      flippedCards: [],
      canFlipCard: true,
      gameWon: false,
      time: 0,
      timer: null,
    };
  },
  computed: {
    shuffledCards() {
      return this.cards;
    }
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    },
    initializeGame() {
      const cardValues = [1, 2, 3, 4, 5, 6, 7, 8];
      this.cards = [...cardValues, ...cardValues]
        .map(value => ({ value, isFlipped: false }))
        .sort(() => 0.5 - Math.random());

      this.resetTimer();
    },
    handleFlip(index) {
      if (!this.canFlipCard) return;

      const card = this.cards[index];
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.moves++;
        this.checkMatch();
      }
    },
    checkMatch() {
      const [card1, card2] = this.flippedCards;
      this.canFlipCard = false;

      setTimeout(() => {
        if (card1.value === card2.value) {
          this.checkGameWon();
          this.correctGuesses++;
        } else {
          card1.isFlipped = false;
          card2.isFlipped = false;
        }
        this.flippedCards = [];
        this.canFlipCard = true;
      }, 1000);
    },
    checkGameWon() {
      if (this.cards.every(card => card.isFlipped)) {
        this.gameWon = true;
        clearInterval(this.timer);
      }
    },
    resetGame() {
      this.moves = 0;
      this.correctGuesses = 0;
      this.gameWon = false;
      this.flippedCards = [];
      this.canFlipCard = true;
      this.time = 0;
      clearInterval(this.timer);
      this.initializeGame();
    },
    resetTimer() {
      this.time = 0;
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    }
  },
  mounted() {
    this.initializeGame();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  color: whitesmoke;
  align-items: center;
  padding: 0 72px;
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.moves {
  color: gray; /* Color para los movimientos */
}

.timer {
  color: yellow; /* Color para el cronómetro */
}

.correct-guesses {
  color: green; /* Color para los aciertos */
}

.board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 86%;
  margin: 0 auto;
}
</style>
