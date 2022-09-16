<script>
import api from "../api/api";
import Search from "../components/Search.vue";

export default {
  components: { Search },

  computed: {
    filterPicture() {
      if (this.filter) {
        return this.items.filter((i) =>
          i.titulo.toLowerCase().includes(this.filter)
        );
      } else {
        return this.items;
      }
    },
  },

  methods: {
    remove(item) {
      if (confirm(`Deseja mesmo excluir ${item.titulo}?`)) {
        api
          .delete(`/fotos/${item._id}`)
          .then(alert(`${item.titulo} excluido com sucesso!`));
        window.location.reload();
      }
    },
  },

  data() {
    return {
      items: [],
      filter: "",
    };
  },

  created() {
    api
      .get("/fotos")
      .then((res) => res.data)
      .then((data) => (this.items = data));
  },
};
</script>

<template>
  <div>
    <Search v-on:input="filter = $event.target.value.toLowerCase()" />
    <div class="gallery">
      <div v-for="item of filterPicture" :key="item._id" class="item">
        <img :src="item.url" :alt="item.titulo" />
        <i class="far fa-trash-alt" @click="remove(item)"></i>
        <router-link :to="{ name: 'edit', params: { id: item._id } }">
          <i class="fas fa-pencil-alt"></i>
        </router-link>
        <h2>{{ item.titulo }}</h2>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.gallery {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  padding: 4rem 0;
}

.item img {
  width: 300px;
  height: 300px;
  border-radius: 1rem;
}

.item h2 {
  font-size: 2rem;
}

.item i {
  cursor: pointer;
  position: absolute;

  color: #ffffff;
  background: #00000080;
  border-radius: 14px;

  margin: 0.25rem 0 0 -2.9rem;
  padding: 0.8rem 0.9rem;
}

.item i:nth-child(2) {
  margin: 0.25rem 0 0 -5.8rem;
  padding: 0.8rem 0.84rem;
}

.item i:hover {
  background: #000000;
  transition: all 0.4s;
}
</style>