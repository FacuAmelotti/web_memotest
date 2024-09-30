<template>
  <nav class="navbar">
    <ul>
      <li><button @click="restartGame" class="restart-button">Reiniciar</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar", // Asegúrate de que el nombre aquí sea consistente
  methods: {
    restartGame() {
      this.$emit('restart');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 30px;
}

.restart-button {
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.restart-button:hover {
  opacity: 0.8;
}
</style>
