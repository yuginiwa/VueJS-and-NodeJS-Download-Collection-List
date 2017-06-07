<template>
  <div>
    <h3>Categories</h3>
    <app-category :categories="categories"></app-category>

  </div>
</template>

<script>
  import Category from './Category.vue';

  export default {
    computed: {
      categories() {
        return this.$store.getters.categories;
      }
    },
    components: {
      appCategory: Category
    },
    created() {
      this.$store.dispatch('initCategories')
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
    width: 100%;
  }
</style>
