<template>
  <div class="search">
    <input type="text" placeholder="Procure uma imagem">
  </div>
</template>

<style scoped>
.search{
    width: 100%;

    padding: 2rem 0;
    margin: 0 auto;
}

input {
  width: calc( 100% - 48px );
  max-width: 800px;

  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;

  outline: none;
  border: none;
  border-radius: 1rem;

  color: #ffffff;
  background: #00000050;
  padding: 0.875rem 1rem;
}


</style>