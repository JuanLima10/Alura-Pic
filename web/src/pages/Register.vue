<script>
import api from "../api/api";
export default {
  name: "addToGallery",
  data() {
    return {
      formData: {
        _id: this.$route.params.id,
        titulo: "",
        url: "",
        grupo: 4,
      },
    };
  },

  created() {
    if (this.formData._id) {
      api
        .get(`/fotos/${this.formData._id}`)
        .then((res) => res.data)
        .then((data) => (this.formData = data));
    }
  },

  methods: {
    addToGallery() {
      if (this.formData._id) {
        if (confirm(`Deseja mesmo editar ${this.formData.titulo}`)) {
          api
            .put(`/fotos/${this.formData._id}`, this.formData)
            .then(window.location.reload());
        }
      } else {
        if (confirm(`Deseja mesmo criar ${this.formData.titulo}`)) {
          api
            .post(`/fotos`, this.formData)
            .then(window.location.reload());
        }
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="addToGallery">
    <h1>Cadastrar imagem</h1>
    <input
      id="url"
      type="text"
      v-model.lazy="formData.url"
      placeholder="Cole a url da imagem aqui..."
    />
    <input
      id="titulo"
      type="text"
      v-model="formData.titulo"
      placeholder="Digite o nome da imagem..."
    />
    <img v-show="formData.url" :src="formData.url" :alt="formData.titulo" />
    <button type="submit">Criar</button>
  </form>
</template>

<style scoped>
form {
  background: #00000050;
  border-radius: 1rem;

  margin: 2rem 0 0 0;
  padding: 0.5rem 1rem 2.5rem;
}

form input {
  width: calc(100% - 48px);
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

  margin: 1rem 0;
  padding: 0.875rem 1rem;
}

form img {
  max-width: 250px;
  max-height: 250px;
  display: block;
  border-radius: 1rem;

  margin: 1rem auto;
}

form button {
  cursor: pointer;
  display: block;

  color: #000000;
  background: #ffffff;
  border: solid #ffffff 1px;
  border-radius: 0.5rem;

  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
}

button:hover {
  background: transparent;
  color: #ffffff;
  transition: all 0.4s;
}
</style>