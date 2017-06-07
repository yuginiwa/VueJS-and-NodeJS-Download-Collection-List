<template>
  <div>
    <h3>Genres</h3>
    <app-genre :genres="genres"></app-genre>
  </div>
</template>

<script>
  import Genre from './Genre.vue';

  export default {
    computed: {
      genres() {
        return this.$store.getters.genres;
      }
    },
    components: {
      appGenre: Genre
    },
    created() {
      this.$store.dispatch('initGenres');
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
    width: 100%;
  }
</style>
