<template>
  <div class="navbar">
    <h1>Concept Pictures</h1>
    <div class="nav">
      <router-link :to="{ name: 'gallery' }">
        <button>Galeria</button>
      </router-link>
      <router-link to="/register">
        <button>Cadastro</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
button {
  cursor: pointer;

  color: white;
  background: transparent;
  border: solid white 1px;
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;
}

button:hover{
  background: white;
  color: black;
  transition: all 0.4s;
}
</style>