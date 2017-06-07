<template>
  <div>
    <app-panel-navigation></app-panel-navigation>
    <div class="content">
      <aside>
        <app-categories></app-categories>
        <app-genres></app-genres>
      </aside>

      <section>
        <app-favorites></app-favorites>
      </section>
    </div>
  </div>
</template>

<script>
  import Categories from './Category/Categories.vue';
  import Genres from './Genre/Genres.vue';
  import Favorites from './Favorites.vue';
  import PanelNavigation from './PanelNavigation.vue';

  export default {
    components: {
      appCategories: Categories,
      appGenres: Genres,
      appFavorites: Favorites,
      appPanelNavigation: PanelNavigation
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    padding: 0;
    margin: 0;
  }
  aside {
    flex-flow: column;
    width: 30%;
    order: 1;
  }
  section {
    width: 70%;
  }
</style>
