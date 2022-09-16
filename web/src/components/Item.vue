<template>
  <div v-for="item of itens" :key="item" class="item">
    <img :src="item.url" :alt="item.titulo" />
    <slot/>
    <h2>{{ item.titulo }}</h2>
  </div>
</template>

<script>
export default {
  props: ["itens"],
};
</script>

<style scoped>
.item img {
  width: 300px;
  height: 300px;
  border-radius: 1rem;
}

.item h2 {
  font-size: 2rem;
}

</style>