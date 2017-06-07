<template>
  <div class="view-all-list-box">
        <div class="filter-box">
            <div class="filter-by">
                <label>Filter By: </label>
                <select v-model="filterBy">
                    <option value="categories">Categories</option>
                    <option value="genres">Genres</option>
                </select>
            </div>

            <div class="filter-by-sub-filter">
                <ul>
                    <router-link v-for="element in filtered" tag="li" :to="{name: 'filterBy', params: { filterBy: element}}">{{element}}</router-link>
                </ul>
            </div>
        </div>

        <hr />
        <div class="list-box">
            <div v-for="(post, indexOf) in posts">
              <router-link
                tag="div"
                class="list"
                :to="{
                  name: 'viewDetails',
                  params: {
                    category: post.category,
                    title: post.title
                    }
                }"
              >
                  <img :src="post.image"  :alt="post.title">
                  <p>{{ post.title }}</p>
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    data () {
      return {
        filterBy: 'categories'
      }
    },
    computed: {
      ...mapGetters({
        postGetters: 'posts',
        genresGetters: 'genres',
        categoriesGetters: 'categories'
      }),
      posts() {
        return this.postGetters;
      },
      genres() {
        return this.genresGetters;
      },
      categories() {
        return this.categoriesGetters;
      },
      filtered() {
        if (this.filterBy === 'categories') {
          return this.categories
        }
        if (this.filterBy === 'genres') {
          return this.genres
        }
      }
    },
    created() {
      this.$store.dispatch('loadAllUserPosts');
    }
  }
</script>

<style scoped>
  /*========================*/
      /* List Box */
  /*========================*/
  .list-box {
      width: 95%;
      margin: 30px auto;
      display: flex;
      flex-basis: 25%;
  }

  .list img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
      transition: opacity 0.2s;
  }

  .list img:hover{
      opacity: 1;
      transition: opacity 0.2s;
  }

  .list {
      margin: 2px;
      width: 100%;
      height: 400px;
      text-align: center;
      position: relative;
      background-color: black;
  }

  p {
      margin: 0;
      padding: 0;
      height: 40px;
      width: 100%;
      font-size: 110%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      color: white;
      position: absolute;
      bottom: 0px;
  }

  /*========================*/
      /* Filter By */
  /*========================*/

  .filter-box {
      width: 60%;
      margin: 20px auto;
  }

  .filter-by {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100px;
      margin-bottom: 10px;
  }

  .filter-by > label {
      text-align: center;
      font-size: 130%;
  }

  .filter-by > select {
      width: 300px;
      margin: auto;
      font-size: 100%;
  }


  .filter-by-sub-filter ul {
      display: flex;
      flex-direction: row;
  }

  .filter-by-sub-filter > ul > li {
      flex-basis: 25%;
      list-style: none;
      text-align: center
  }
</style>
