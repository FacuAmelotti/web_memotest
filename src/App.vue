<template>
  <div id="app">
    <NavMain />
    <div class="container">
      <BoardGame />
    </div>
  </div>
</template>

<script>
import NavMain from './components/Nav.vue';
import BoardGame from './components/BoardGame.vue';

export default {
  name: 'App',
  components: {
    NavMain,
    BoardGame
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #ecf0f1;
}

#app {
  text-align: center;
}

.container {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  font-size: 2.25rem;
  margin-bottom: 20px;
}

.board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}

button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>
