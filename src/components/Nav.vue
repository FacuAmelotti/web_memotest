<template>
  <nav class="navbar">
    <h1>Juego de Memoria</h1>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Puntajes</a></li>
      <li><a href="#">Acerca de</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavMain",
  methods: {
    restartGame() {
      this.$emit('restart'); // Emitir un evento para reiniciar el juego
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50; /* Color más oscuro */
  padding: 10px; /* Reducir padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem; /* Ajustar tamaño del título */
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 30px; /* Aumentar espacio entre elementos */
}

.navbar ul li {
  display: inline;
}

.navbar ul li a,
.restart-button {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem; /* Tamaño de fuente para los enlaces */
}

.restart-button {
  background-color: #e74c3c; /* Color del botón */
  border: none;
  border-radius: 5px;
  padding: 5px 10px; /* Espaciado interno */
  cursor: pointer; /* Cambiar cursor al pasar sobre el botón */
}

.navbar ul li a:hover,
.restart-button:hover {
  text-decoration: underline; /* Efecto al pasar el mouse */
  opacity: 0.8; /* Efecto de opacidad al pasar el mouse */
}
</style>
