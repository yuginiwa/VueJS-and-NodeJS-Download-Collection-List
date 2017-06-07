<template>
  <div class="genre">
    <div v-for="genre in genres">
      <p>{{ genre.genre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['genres']
}
</script>

<style scoped>
  .genre {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .genre > div {
    padding: 3px;
  }
</style>
